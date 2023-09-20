/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!src/providers/**',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/api/client.ts',
    '!**/*.d.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
