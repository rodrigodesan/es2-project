import React, { useState, useEffect, Fragment } from 'react';
import WriteReport from '../WriteReport';
import { useReportContext } from '../../contexts/reportContext';
import { getReportsFromSearch } from '../../services/reports';
import { useDashContext } from '../../contexts/dashContext';

function SaveSearches({ data }) {
  const [hearth, setHearth] = useState(false);
  const [bgSearches, setBgSearches] = useState('');
  const [isEditionOpen, setIsEditionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [reports, setReports] = useState([]);

  const { setSuccess } = useReportContext();
  const {
    states, regions, years, resources,
  } = useDashContext();

  const fillHearth = () => {
    setHearth(!hearth);
  };

  const cores = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];

  useEffect(() => {
    const cor = cores[Math.floor(Math.random() * cores.length)];
    setBgSearches(cor);
  }, []);

  useEffect(() => {
    (async () => {
      const reportsResponse = await getReportsFromSearch(data.id);
      setReports(reportsResponse);
    })();
  }, [isDetailsOpen]);

  const createdAt = new Date(data.created_at);
  const date = createdAt.toLocaleDateString('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '/');

  const toggleReportComponent = () => {
    setIsEditionOpen(!isEditionOpen);
    setSuccess('');
  };

  const toggleReportStatus = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const formatData = (datum) => {
    const filter = datum.split('-')[0];
    const value = datum.split('-')[1];

    let formatedFilter;
    let formatedValue;

    switch (filter) {
      case 'maxStates':
        formatedFilter = 'Quantidade de estados';
        break;

      case 'order':
        formatedFilter = 'Ordem';
        formatedValue = value === 'ASC' ? 'Crescente' : 'Decrescente';
        break;

      case 'regionId':
        formatedFilter = 'Região';
        formatedValue = regions?.find((r) => r.value === Number(value)).label;
        break;

      case 'stateId':
        formatedFilter = 'Estado';
        formatedValue = states?.find((r) => r.value === Number(value)).label;
        break;

      case 'resourceId':
        formatedFilter = 'Recurso';
        formatedValue = resources?.find((r) => r.value === Number(value)).label;
        break;

      case 'yearId':
        formatedFilter = 'Ano';
        formatedValue = years?.find((r) => r.value === Number(value)).label;
        break;

      default:
        break;
    }

    return {
      filter: formatedFilter,
      value: formatedValue || value,
    };
  };

  return (
    <div>
      <div className={`d-flex align-items-center ${bgSearches} border border-black rounded-top p-4 m-4 fs-6 font2 text-white fw-semibold`} role="presentation" onClick={toggleReportStatus} style={{ cursor: 'pointer' }}>
        <span className="flex-grow-1 me-5 pe-5">{data.term}</span>
        <span className="me-3 text-decoration-underline font1" role="presentation" onClick={toggleReportComponent}>Escrever relatório</span>
        <span className="me-3 font1">{date}</span>
        <img src="./src/assets/icons/share-icon-white.png" alt="" />
        <span role="presentation" onClick={fillHearth} className="ms-3">
          {!hearth ? <img src="./src/assets/icons/hearth1.png" alt="" /> : <img src="./src/assets/icons/hearth2.png" alt="" />}
        </span>
      </div>
      {isEditionOpen && <WriteReport searchId={data.id} term={data.term} />}
      {isDetailsOpen && !isEditionOpen && (
        <div className="d-flex justify-content-center write-report mx-4 border border-black rounded-bottom font2 fw-semibold flex-column">
          <h5>Dados da busca</h5>
          <ul className="mb-5">
            <li>
              {formatData(data.filter1).filter}
              :
              {' '}
              {formatData(data.filter1).value}
            </li>
            <li>
              {formatData(data.filter2).filter}
              :
              {' '}
              {formatData(data.filter2).value}
            </li>
            {data.filter3 && (
              <li>
                {formatData(data.filter3).filter}
                :
                {' '}
                {formatData(data.filter3).value}
              </li>
            )}
          </ul>

          {reports.length > 0 && (
            <>
              <h5 style={{ marginBottom: '-2.5rem' }}>Relatórios</h5>
              <ol>
                {reports?.map((r) => {
                  const reportCreatedAt = new Date(r.created_at);
                  const reportDate = reportCreatedAt.toLocaleDateString('pt-BR', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                  }).replace(/\//g, '/');

                  return (
                    <Fragment key={r.id}>
                      <li className="mt-5" dangerouslySetInnerHTML={{ __html: r.description }} />
                      <small>
                        (Escrito em&nbsp;
                        {reportDate}
                        )
                      </small>
                    </Fragment>
                  );
                })}
              </ol>
            </>
          ) || <h5>Ainda não possui relatório</h5>}
        </div>
      )}

    </div>
  );
}

export default SaveSearches;
