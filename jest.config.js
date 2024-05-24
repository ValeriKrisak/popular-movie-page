module.exports = {
    // Indicates which environment Jest should run in
    testEnvironment: 'jsdom',

    // Transform files with Babel
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },

    // File extensions Jest will look for
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

    // Test files pattern
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

    // Ignore specific directories or files
    // For example, ignore node_modules by default
    // If you need to test files within node_modules, remove this line
    // or configure it differently
    testPathIgnorePatterns: ['/node_modules/'],
};
