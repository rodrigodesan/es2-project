import React from 'react';
import Navbar from '../../components/Navbar';
import Box from '../../components/Box';
import Button from '../../components/Buttons';
import Result from '../../components/Result';
import { useDashContext } from '../../contexts/dashContext';
import { createOptions } from './utils';
import { categoriesFilters } from './helpers';

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

  const currentBoxFilter = (boxNumber) =>
    categoriesFilters.filters[currentBoxValue.category.value]?.[boxNumber];

  const dynamicOptions = (id) => {
    switch (id) {
      case 'regionId':
        return createOptions(regions);

      case 'stateId':
        return createOptions(states);

      case 'resourceId':
        return createOptions(resources);

      case 'yearId':
        return createOptions(years);

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

  const filterDisabled = currentBoxValue.category.value !== 0 && !currentBoxFilter(2);

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
          <div className="d-flex justify-content-center">
            <Button title="Salvar Busca" icon="/src/assets/icons/save-icon.png" color="bg-save btn-md border border-dark flex-1 px-5" action="home" />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Box boxId={`${currentBoxFilter(2)?.id}-filter3`} title={currentBoxFilter(2)?.title || 'Filtro 3'} options={currentBoxFilter(2)?.options || dynamicOptions(currentBoxFilter(2)?.id)} disabled={filterDisabled} />
          <div className="d-flex justify-content-center ">
            <Button title="Compartilhar" icon="/src/assets/icons/share-icon.png" color="bg-share btn-md border border-dark ms-5" action="home" />
            <Button title="Download" icon="/src/assets/icons/pdf-icon.png" color="bg-download btn-md border border-dark ms-2" action="home" />
          </div>
        </div>
      </div>
      <Result category={currentBoxValue.category.value} data={filterResult} loading={loading} />
    </div>
  );
}

export default Dashboard;
