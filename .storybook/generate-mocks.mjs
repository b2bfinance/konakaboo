import { generateProducts } from "../test/product-mocks";
import fs from "fs";

const main = async () => {
  await fs.promises.mkdir("./storybook-mocks");

  await fs.promises.writeFile(
    "./storybook-mocks/products.json",
    JSON.stringify({ data: generateProducts(50) })
  );
};

main();
