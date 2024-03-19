import React from 'react';

function Box({ title, options }) {
  return (
    <div className="rounded-5 m-5 mb-0 p-4 border border-dark">
      <h3 className="fw-bold fs-4 box-font">{title}</h3>
      <select className="w-100 selection-bg rounded-5 p-1 border border-dark text-dark">
        {options.map((option, index) => (
          <option className="text-center " key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Box;
