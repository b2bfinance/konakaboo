module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  coverageDirectory: "coverage",
  verbose: true,
  testRegex: "\\.(test|spec)\\.jsx?$",
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
