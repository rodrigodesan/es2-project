import React from 'react';
import Navbar from '../../components/Navbar';
import SaveSearches from '../../components/SaveSearches';
import { useProfileContext } from '../../contexts/profileContext';

function BuscasSalvas() {
  const { searches } = useProfileContext();

  return (
    <div>
      <Navbar page="false" activePage="buscas-salvas" />

      <div className="dashboard-space">
        <h1 className="font2 mt-5 ms-1 ps-4 fs-4 fw-bolder">Buscas Salvas 📌</h1>
        {searches.map((x, index) => (
          <SaveSearches key={index} data={x} />
        ))}
      </div>
    </div>
  );
}

export default BuscasSalvas;
