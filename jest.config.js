module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  verbose: true,
  testRegex: "\\.(test|spec)\\.jsx?$",
};
