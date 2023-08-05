module.exports = 'test-file-stub';
export default {
    get: jest.fn(() => Promise.resolve({ data: 'some data' })),
    // Add other methods if needed
  };
  