import React from 'react';
import jsPDF from 'jspdf';
import Navbar from '../../components/Navbar';
import Box from '../../components/Box';
import Button from '../../components/Buttons';
import Result from '../../components/Result';
import { useDashContext } from '../../contexts/dashContext';
import { categoriesFilters } from './helpers';
import { useProfileContext } from '../../contexts/profileContext';

function Dashboard() {
  const {
    regions,
    states,
    years,
    resources,
    currentBoxValue,
    setCurrentBoxValue,
    fetchData,
    filterResult,
    loading,
  } = useDashContext();
  const { saveASearch, success } = useProfileContext();

  const currentBoxFilter = (boxNumber) =>
    categoriesFilters.filters[currentBoxValue.category.value]?.[boxNumber];

  const dynamicOptions = (id) => {
    switch (id) {
      case 'regionId':
        return regions;

      case 'stateId':
        return states;

      case 'resourceId':
        return resources;

      case 'yearId':
        return years;

      default:
        return [];
    }
  };

  const cleanSearch = () => {
    setCurrentBoxValue({
      category: {
        value: 0,
      },
      filter1: {
        id: '',
        value: '',
      },
      filter2: {
        id: '',
        value: '',
      },
      filter3: {
        id: '',
        value: '',
      },
    });
  };

  const onFetchData = () => {
    fetchData(currentBoxValue);
  };

  const onSaveSearch = () => {
    const term = categoriesFilters.options[currentBoxValue.category.value - 1].label;
    const filter1 = `${currentBoxValue.filter1.id}-${currentBoxValue.filter1.value}`;
    const filter2 = `${currentBoxValue.filter2.id}-${currentBoxValue.filter2.value}`;
    const filter3 = `${currentBoxValue.filter3.id}-${currentBoxValue.filter3.value}`;

    saveASearch(term, filter1 !== '-' && filter1 || '', filter2 !== '-' && filter2 || '', filter3 !== '-' && filter3 || '');
  };

  const filterDisabled = currentBoxValue.category.value !== 0 && !currentBoxFilter(2);
  const buttonSearchDisabled = currentBoxValue.category.value === 0;

  const handleDownloadPDF = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();
    let yPos = 10;
    doc.setFontSize(18);
    const titulo = categoriesFilters.options[currentBoxValue.category.value - 1].label;
    doc.text(`${titulo}`, 10, yPos);
    yPos += 10;

    doc.setFontSize(12);
    const searchByUser = currentBoxValue.category.value;

    if (searchByUser === 2) {
      const { days } = filterResult.avg_duration;

      doc.text(`${days} dias`, 10, yPos);
    } else {
      filterResult.forEach((dados) => {
        yPos += 10;
        if (searchByUser === 1) {
          const { id } = dados.State;
          // eslint-disable-next-line camelcase
          const { num_commitment_terms } = dados;
          const { name } = dados.State;
          // eslint-disable-next-line camelcase
          doc.text(`ID Do Estado: ${id}, Nome: ${name}, Número do Termo de compromisso: ${num_commitment_terms}`, 10, yPos);
        } else if (searchByUser === 3) {
          const { days } = dados.avg_duration;
          const { name } = dados.State;
          doc.text(`Duração Média: ${days}, Estado: ${name}`, 10, yPos);
        } else if (searchByUser === 4) {
          const { item } = dados.Resource;
          // eslint-disable-next-line camelcase
          const { num_processes } = dados;
          // eslint-disable-next-line camelcase
          doc.text(`Número de Processos: ${num_processes}  Recurso: ${item}`, 10, yPos);
        } else if (searchByUser === 5) {
          // eslint-disable-next-line camelcase
          const { avg_value } = dados;
          const { name } = dados.State;
          // eslint-disable-next-line camelcase
          doc.text(`Valor Médio: ${avg_value}, Estado: ${name}`, 10, yPos);
        }
      });
    }
    const createdAt = new Date();
    const date = createdAt.toLocaleDateString('pt-BR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '/');

    doc.save(`${titulo} ${date}.pdf`);
  };

  return (
    <div>
      <Navbar page="false" activePage="dashboard" />
      <Box boxId="box-category" title="Categoria de Busca" options={categoriesFilters.options} />
      <div className="row mx-0">
        <div className="col-md-4 p-0">
          <Box boxId={`${currentBoxFilter(0)?.id}-filter1`} title={currentBoxFilter(0)?.title || 'Filtro 1'} options={currentBoxFilter(0)?.options || dynamicOptions(currentBoxFilter(0)?.id)} />
          <div className="d-flex justify-content-center ms-1">
            <Button title="Buscar" icon="/src/assets/icons/search-icon.png" color="bg-search btn-md border border-dark px-4 ms-1" onClick={onFetchData} />
            <Button title="Limpar" icon="/src/assets/icons/clear-icon.png" color="bg-clear btn-md border border-dark px-4" onClick={cleanSearch} />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Box boxId={`${currentBoxFilter(1)?.id}-filter2`} title={currentBoxFilter(1)?.title || 'Filtro 2'} options={currentBoxFilter(1)?.options || dynamicOptions(currentBoxFilter(1)?.id)} />
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Button title="Salvar Busca" icon="/src/assets/icons/save-icon.png" color="bg-save btn-md border border-dark flex-1 px-5" onClick={onSaveSearch} isDisabled={buttonSearchDisabled} />
            {success && <p className="text-success mt-3">{success}</p>}
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Box boxId={`${currentBoxFilter(2)?.id}-filter3`} title={currentBoxFilter(2)?.title || 'Filtro 3'} options={currentBoxFilter(2)?.options || dynamicOptions(currentBoxFilter(2)?.id)} disabled={filterDisabled} />
          <div className="d-flex justify-content-center ">
            <Button title="Compartilhar" icon="/src/assets/icons/share-icon.png" color="bg-share btn-md border border-dark ms-5" action="home" />
            <Button title="Download" icon="/src/assets/icons/pdf-icon.png" color="bg-download btn-md border border-dark ms-2" onClick={handleDownloadPDF} />
          </div>
        </div>
      </div>
      <Result category={currentBoxValue.category.value} data={filterResult} loading={loading} />
    </div>
  );
}

export default Dashboard;
