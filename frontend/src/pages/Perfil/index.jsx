import React from 'react';
import Navbar from '../../components/Navbar';

function Perfil() {
  return (
    <div>
      <Navbar page="false" activePage="perfil" />
      <h1 className="mt-5 dashboard-space text-center font1">Perfil Page</h1>
    </div>
  );
}

export default Perfil;
