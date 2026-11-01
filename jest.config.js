module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: ['src/js/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};