// .storybook/test-runner.js
const { getJestConfig } = require('@storybook/test-runner');

module.exports = {
  getJestConfig: async () => {
    const config = await getJestConfig();

    config.collectCoverage = true;
    config.coverageDirectory = 'coverage/storybook';
    config.coverageReporters = ['lcov', 'text-summary'];

    return config;
  },
};
