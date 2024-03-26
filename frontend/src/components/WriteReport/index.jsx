import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useReportContext } from '../../contexts/reportContext';

function WriteReport({ searchId, term }) {
  const [reportContent, setReportContent] = useState('');
  const { createAReport, success } = useReportContext();

  const handleChange = (content) => {
    setReportContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAReport({ description: reportContent, saved_search: searchId, term });
    setReportContent('');
  };

  return (
    <div className="write-report border border-black m-4 rounded-bottom-5">
      <h5>Escreva o seu relatório 📝</h5>
      <form onSubmit={handleSubmit}>
        <ReactQuill
          className="p-0 m-0 border border-dark"
          value={reportContent}
          onChange={handleChange}
          theme="snow"
          placeholder="Digite seu relatório aqui..."
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {success && <p className="text-success text-center mt-4">{success}</p>}
    </div>
  );
}

export default WriteReport;
