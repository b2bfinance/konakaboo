import "colors";
import fs from "fs";
import path from "path";
import { generateProducts } from "../test/product-mocks.mjs";

const logInfo = (...messages) => {
  console.log("info".green.bold, "=>", ...messages);
};

const logError = (...messages) => {
  console.log("Error".red.bold, "\n\n", ...messages, "\n\n");
};

const createMockDirectory = (mockDirectory) => fs.promises.mkdir(mockDirectory);

const createMockProducts = (filePath) =>
  fs.promises.writeFile(
    filePath,
    JSON.stringify({ data: generateProducts(50) })
  );

const main = async () => {
  const mockDirectory = path.resolve("./storybook-mocks");

  try {
    await createMockDirectory(mockDirectory);
    logInfo(`Created mock directory at ${mockDirectory}`);
  } catch (e) {
    logError(e.message.red);
  }

  try {
    const productsMockPath = path.join(mockDirectory, "products.json");
    await createMockProducts(productsMockPath);
    logInfo(`Created product mocks at ${productsMockPath}`);
  } catch (e) {
    logError(e.message.red);
  }
};

main();
