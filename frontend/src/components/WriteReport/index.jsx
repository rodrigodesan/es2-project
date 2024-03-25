import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WriteReport() {
  const [reportContent, setReportContent] = useState('');

  const handleChange = (content) => {
    setReportContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setReportContent('');
  };

  return (
    <div className="write-report border border-black m-4 rounded-bottom-5">
      <h5 className="ms-5">Escreva o seu relatório 📝</h5>
      <form className="ms-5" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default WriteReport;
