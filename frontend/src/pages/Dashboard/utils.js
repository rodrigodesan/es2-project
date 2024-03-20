export function createOptions(result) {
  const options = [{ value: 0, label: 'Todos(as)' }];

  result?.forEach((element) => {
    const {
      id, year, name, item,
    } = element;

    options.push({ value: id, label: (year && String(year)) || name || item });
  });

  return options;
}
