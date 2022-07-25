module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  preset: 'jest-expo',
  rootDir: './src',
  setupFiles: ['<rootDir>/../jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|victory|victory-native)',
  ],
};
