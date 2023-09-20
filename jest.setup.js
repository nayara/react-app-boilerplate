import '@testing-library/jest-dom';

global.console = {
  ...console,
  error: jest.fn(),
};
