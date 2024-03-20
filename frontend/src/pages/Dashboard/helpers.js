const statesQuantityOptions = [
  { value: 0, label: 'Todos(as)' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
  { value: 24, label: '24' },
  { value: 25, label: '25' },
  { value: 26, label: '26' },
  { value: 27, label: '27' },
];

export const categoriesFilters = {
  options: [
    { value: 1, label: 'Processos por estados' },
    { value: 2, label: 'Média de duração da vigência' },
    { value: 3, label: 'Média de duração da vigência por estados' },
    { value: 4, label: 'Processos por recursos' },
    { value: 5, label: 'Média de valor do termo por estados' },
  ],
  filters: {
    1: [
      {
        id: 'maxStates',
        title: 'Quantidade de estados',
        options: statesQuantityOptions,
      },
      {
        id: 'regionId',
        title: 'Região',
      },
      {
        id: 'order',
        title: 'Ordem',
        options: [
          { value: 'ASC', label: 'Crescente' },
          { value: 'DESC', label: 'Decrescente' },
        ],
      },
    ],
    2: [
      {
        id: 'stateId',
        title: 'Estado',
      },
      {
        id: 'resourceId',
        title: 'Recurso',
      },
    ],
    3: [
      {
        id: 'yearId',
        title: 'Ano',
      },
      {
        id: 'maxStates',
        title: 'Quantidade de estados',
        options: statesQuantityOptions,
      },
      {
        id: 'regionId',
        title: 'Região',
      },
    ],
    4: [
      {
        id: 'yearId',
        title: 'Ano',
      },
      {
        id: 'stateId',
        title: 'Estado',
      },
      {
        id: 'regionId',
        title: 'Região',
      },
    ],
    5: [
      {
        id: 'yearId',
        title: 'Ano',
      },
      {
        id: 'maxStates',
        title: 'Quantidade de estados',
        options: statesQuantityOptions,
      },
      {
        id: 'regionId',
        title: 'Região',
      },
    ],
  },
};
