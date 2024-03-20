export function createTableData(rawData, type) {
  const tableData = [];

  switch (type) {
    case 1:
      rawData?.forEach((d) => tableData.push({
        'ID do Estado': d?.state,
        Nome: d?.State?.name,
        'Número de Termos de Compromisso': d?.num_commitment_terms,
      }));
      break;

    case 3:
      rawData?.forEach((d) => tableData.push({
        'Duração Média': d?.avg_duration?.days,
        Estado: d?.State?.name,
      }));
      break;

    case 4:
      rawData?.forEach((d) => tableData.push({
        'Número de Processos': d?.num_processes,
        Recurso: d?.Resource?.item,
      }));
      break;

    case 5:
      rawData?.forEach((d) => tableData.push({
        'Valor Médio': d?.avg_value,
        Estado: d?.State?.name,
      }));
      break;

    default:
      break;
  }

  return { tableData, columns: tableData.length ? Object.keys(tableData[0]) : [] };
}
