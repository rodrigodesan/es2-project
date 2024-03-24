import React from 'react';
import Navbar from '../../components/Navbar';
import SaveSearchs from '../../components/SaveSearchs';

function BuscasSalvas() {
  return (
    <div>
      <Navbar page="false" activePage="buscas-salvas" />

      <div className="dashboard-space">
        <h1 className="font2 mt-5 ms-1 ps-4 fs-4 fw-bolder">Buscas Salvas 📌</h1>
        <SaveSearchs title="Processos por estados" />
        <SaveSearchs title="Média de duração" />
        <SaveSearchs title="Média de duração" />
        <SaveSearchs title="Média de duração" />
      </div>
    </div>
  );
}

export default BuscasSalvas;
