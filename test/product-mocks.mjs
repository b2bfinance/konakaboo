import faker from "faker";

export const generateProduct = () => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  brand: faker.company.companyName(),
  description: faker.lorem.paragraph(),
  highlighted: faker.datatype.boolean(),
  labels: [faker.random.word(), faker.random.word()],
  columns: " "
    .repeat(4)
    .split("")
    .map(() => ({
      label: faker.random.word(),
      value: faker.datatype.number(),
      subtext: faker.random.word(),
    })),
  detailed: " "
    .repeat(6)
    .split("")
    .map(() => ({
      title: faker.random.word(),
      rows: " "
        .repeat(Math.max(2, faker.datatype.number(10)))
        .split("")
        .map(() => ({
          label: faker.random.word(),
          value: faker.datatype.number(),
        })),
    })),
  feature_point: faker.random.words(),
  links: {
    apply: "#apply",
    logo:
      "data:image/octet-stream;base64,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",
  },
  meta: {
    faded: false,
    confirm: {
      heading: faker.random.words(),
      description: faker.lorem.paragraph(),
    },
  },
});

export const generateProducts = (count) =>
  " "
    .repeat(count)
    .split("")
    .map(() => generateProduct());
