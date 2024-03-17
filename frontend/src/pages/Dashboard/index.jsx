import React from 'react';
import Navbar from '../../components/Navbar';
import Box from '../../components/Box';
import Button from '../../components/Buttons';
import Result from '../../components/Result';

const options = [
  { value: 'option1', label: 'Quantos dos beneficiados são...' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' },
];

function Dashboard() {
  return (
    <div>
      <Navbar page="false" />
      <Box title="Categoria de Busca" options={options} />
      <div className="row mx-0">
        <div className="col-md-4 p-0">
          <Box title="Filtro 1" options={options} />
          <div className="d-flex ps-md-5">
            <Button title="Buscar" icon="/src/assets/icons/search-icon.png" color="bg-search btn-md border border-dark" action="home" />
            <Button title="Limpar" icon="/src/assets/icons/clear-icon.png" color="bg-clear btn-md border border-dark " action="home" />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Box title="Filtro 2" options={options} />
          <div className="d-flex ps-5 ms-5">
            <Button title="Salvar Busca" icon="/src/assets/icons/save-icon.png" color="bg-save btn-md border border-dark ms-5" action="home" />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Box title="Filtro 3" options={options} />
          <div className="d-flex mx-3 ps-2 ">
            <Button title="Compartilhar" icon="/src/assets/icons/share-icon.png" color="bg-share btn-md border border-dark" action="home" />
            <Button title="Download" icon="/src/assets/icons/pdf-icon.png" color="bg-download btn-md border border-dark" action="home" />
          </div>
        </div>
      </div>
      <Result />
    </div>
  );
}

export default Dashboard;
