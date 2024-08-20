module.exports = {
  testEnvironment: 'jsdom',
  resetMocks: false,
  setupFilesAfterEnv: ['jest-extended', './jest.setup.js'],
  transformIgnorePatterns: ['node_modules/(?!uuid)/"'],
}
