import faker from "faker";

export const generateFilter = () => ({
  title:faker.random.word(),
  key: faker.lorem.slug(),
  selected: [],
  multiChoice:faker.datatype.boolean(),
  choices: " "
    .repeat(Math.max(2, faker.datatype.number(8)))
    .split("")
    .map(() => ({
      label:faker.random.word(),
      value: faker.datatype.uuid(),
    })),
});

export const generateFilters = count =>
  " "
    .repeat(count)
    .split("")
    .map(() => generateFilter());

export const addSelected = filter => {
  const values = filter.choices.map(choice => choice.value);

  if (filter.multiChoice) {
    return {
      ...filter,
      selected: values.splice(
        0,
        Math.max(2, faker.datatype.number(values.length - 1))
      ),
    };
  }

  return {
    ...filter,
    selected: [
      ...values.splice(Math.max(1, faker.datatype.number(values.length - 1)), 1),
    ],
  };
};

export const addSelectedToMany = filters =>
  filters.map(filter => addSelected(filter));
