import React from 'react';
import Navbar from '../../components/Navbar';

function Recursos() {
  return (
    <div>
      <Navbar page="true" activePage="recursos" />
      <h1 className="mt-5 dashboard-space text-center font1">Recursos disponíveis</h1>
      <p className="mt-4 text-center fs-4 font1">Informações organizadas</p>
      <p className="mt-4 text-center fs-4 font1">Criar relatórios</p>
      <p className="mt-4 text-center fs-4 font1">Dashboard facilitado</p>
      <p className="mt-4 text-center fs-4 font1">Buscas Salvas</p>
      <p className="mt-4 text-center fs-4 font1">Download Pdf</p>
    </div>
  );
}

export default Recursos;
