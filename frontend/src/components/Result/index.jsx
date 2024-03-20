import React from 'react';
import { createTableData } from './utils';

function Result(props) {
  const { category, data, loading } = props;

  return (
    <div className="rounded-5 m-5 mb-0 p-4 border border-dark" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
      <h3 className="fw-bold fs-4 result-font">Resultado</h3>
      <div />

      {category === 2 && (
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {loading ? <h5>Carregando...</h5> : (
            data?.avg_duration?.days && (
              <h4>
                {data?.avg_duration?.days}
                {' '}
                dias
              </h4>
            ) || <h4>Nenhum resultado</h4>
          )}
        </div>
      )}

      {category !== 2 && (
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {loading ? <h5>Carregando...</h5> : (
            data?.length > 0 && createTableData(data, category).tableData.length && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    {createTableData(data, category).columns.map((c, idx) => (
                      <th key={idx} scope="col">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {createTableData(data, category).tableData.map((d, idx) => (
                    <tr key={idx}>
                      <td>{d[createTableData(data, category).columns[0]]}</td>
                      <td>{d[createTableData(data, category).columns[1]]}</td>
                      <td>{d[createTableData(data, category).columns[2]]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) || <h4>Nenhum resultado</h4>
          )}
        </div>
      )}
    </div>
  );
}

export default Result;
