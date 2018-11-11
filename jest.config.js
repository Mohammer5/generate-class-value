module.exports = {
  roots: [
    "src"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "\\.test\\.(ts|tsx|js)$"
};
