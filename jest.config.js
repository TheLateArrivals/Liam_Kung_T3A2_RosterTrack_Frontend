// Jest set up

module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/(?!index.js)/'
  ],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'), // Handle axios import
    '^@testing-library\\/react$/': 'jest-dom/lib/testing-library/react',
    "\\.css$": "identity-obj-proxy", // process CSS files
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // process image files
  },
};
