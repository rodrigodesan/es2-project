import React from 'react';
import { useDashContext } from '../../contexts/dashContext';

function Box({
  boxId, title, options, disabled,
}) {
  const { setCurrentBoxValue, setFilterResult } = useDashContext();

  function onChange(event) {
    const multipleBoxId = boxId.split('-');

    setCurrentBoxValue((previous) => {
      switch (multipleBoxId[1]) {
        case 'category': {
          setFilterResult([]);
          return {
            category: {
              value: Number(event.target.value),
            },
          };
        }

        default:
          return {
            ...previous,
            [multipleBoxId[1]]: {
              id: multipleBoxId[0],
              value: event.target.value,
            },
          };
      }
    });
  }

  return (
    <div className={`rounded-5 m-5 mb-0 p-4 border border-dark ${disabled && 'selection-bg'}`} style={{ cursor: disabled && 'not-allowed' }}>
      <h3 className="fw-bold fs-4 box-font">{title}</h3>
      <select disabled={disabled} className="w-100 selection-bg rounded-5 p-1 border border-dark text-dark" onChange={onChange}>
        <option className="text-center" value={0}>
          Selecione
        </option>
        {options?.map((option, index) => (
          <option className="text-center" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Box;
