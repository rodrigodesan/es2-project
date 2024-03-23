// Design Pattern: Factory Method
// Interface
class OptionsFactory {
  // eslint-disable-next-line no-unused-vars
  createOption(id, label) {
    throw new Error('O método createOption deve ser implementado por subclasses');
  }
}

// Implementação concreta do Factory Method
class DefaultOptionsFactory extends OptionsFactory {
  createOption(id, label) {
    return { value: id, label: String(label) };
  }
}

// Classe de cliente
export function createOptions(result, factory = new DefaultOptionsFactory()) {
  const options = [{ value: 0, label: 'Todos(as)' }];

  result?.forEach((element) => {
    const {
      id, year, name, item,
    } = element;

    options.push(factory.createOption(id, year || name || item));
  });

  return options;
}
