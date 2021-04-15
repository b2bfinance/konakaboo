import faker from "faker";

export const generateProduct = () => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  brand: faker.company.companyName(),
  description: faker.lorem.paragraph(),
  highlighted:faker.datatype.boolean(),
  labels: [faker.random.word(),faker.random.word()],
  columns: " "
    .repeat(4)
    .split("")
    .map(() => ({
      label:faker.random.word(),
      value: faker.datatype.number(),
      subtext:faker.random.word(),
    })),
  detailed: " "
    .repeat(6)
    .split("")
    .map(() => ({
      title:faker.random.word(),
      rows: " "
        .repeat(Math.max(2, faker.datatype.number(10)))
        .split("")
        .map(() => ({
          label:faker.random.word(),
          value: faker.datatype.number(),
        })),
    })),
  feature_point:faker.random.words(),
  links: {
    apply: "#apply",
    logo:
      "data:image/png;base64,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",
  },
  meta: {
    faded: false,
    confirm: {
      heading:faker.random.words(),
      description: faker.lorem.paragraph(),
    },
  },
});

export const generateProducts = count =>
  " "
    .repeat(count)
    .split("")
    .map(() => generateProduct());
