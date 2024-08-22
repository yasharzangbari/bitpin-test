module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  resetMocks: false,
  setupFilesAfterEnv: ["jest-extended", "./jest.setup.js"],
  transformIgnorePatterns: ['node_modules/(?!uuid)/"'],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
};
