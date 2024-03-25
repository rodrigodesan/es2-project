import React, { useState, useEffect } from 'react';

function SaveSearches({
  data,
}) {
  const [hearth, setHearth] = useState(false);
  const [bgSearches, setBgSearches] = useState('');

  const fillHearth = () => {
    setHearth(!hearth);
  };

  const writeIcon = './src/assets/icons/write-icon.png';
  const shareIcon = './src/assets/icons/share-icon-white.png';
  const hearth1 = './src/assets/icons/hearth1.png';
  const hearth2 = './src/assets/icons/hearth2.png';

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

  return (
    <div>
      <div className={`d-flex align-items-center ${bgSearches} border border-black rounded-4 p-4 m-4 fs-6 font2 text-white fw-semibold`}>
        <span className="flex-grow-1 me-5 pe-5">{data.term}</span>
        <img className="me-3" src={writeIcon} alt="" />
        <span className="me-3 text-decoration-underline font1">Escrever relatório</span>
        <span className="me-3 font1">{date}</span>
        <img src={shareIcon} alt="" />
        <span role="presentation" onClick={fillHearth} className="ms-3">
          {!hearth ? <img src={hearth1} alt="" /> : <img src={hearth2} alt="" />}
        </span>
      </div>
    </div>
  );
}

export default SaveSearches;
