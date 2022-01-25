exports.default = {
  verbose: true,
  rootDir: '.',
  testMatch: [
    '**/__test__/**/*.test.js',
  ],
  collectConverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/(__)?test(s__)?/',
    '/(__)?mock(s__)?',
    '/__jest__/',
    '.?.min.js',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  modulesFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@@/(.*)$': '<rootDir>/src/$1',
    '^@config': '<rootDir>/src/config/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@repositories/(.*)$': '<rootDir>/src/repositories/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
