import React, { useState, useEffect } from 'react';
import WriteReport from '../WriteReport';

function SaveSearches({ data }) {
  const [hearth, setHearth] = useState(false);
  const [bgSearches, setBgSearches] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [hasReport, setHasReport] = useState(false);

  const fillHearth = () => {
    setHearth(!hearth);
  };

  const cores = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];

  useEffect(() => {
    const cor = cores[Math.floor(Math.random() * cores.length)];
    setBgSearches(cor);
  }, []);

  const createdAt = new Date(data.created_at);
  const date = createdAt.toLocaleDateString('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '/');

  const toggleReportComponent = () => {
    setIsOpen(!isOpen);
  };

  const toggleReportStatus = () => {
    setHasReport(!hasReport);
  };

  return (
    <div>
      <div className={`d-flex align-items-center ${bgSearches} border border-black rounded-top p-4 m-4 fs-6 font2 text-white fw-semibold`} role="presentation" onClick={toggleReportStatus}>
        <span className="flex-grow-1 me-5 pe-5">{data.term}</span>
        <span className="me-3 text-decoration-underline font1" role="presentation" onClick={toggleReportComponent}>Escrever relatório</span>
        <span className="me-3 font1">{date}</span>
        <img src="./src/assets/icons/share-icon-white.png" alt="" />
        <span role="presentation" onClick={fillHearth} className="ms-3">
          {!hearth ? <img src="./src/assets/icons/hearth1.png" alt="" /> : <img src="./src/assets/icons/hearth2.png" alt="" />}
        </span>
      </div>
      {isOpen && <WriteReport />}
      {hasReport && !isOpen && (
        <p className="d-flex align-items-center write-report mx-4 border border-black rounded-bottom font2 fw-semibold">
          Ainda não possui relatório
        </p>
      )}
    </div>
  );
}

export default SaveSearches;
