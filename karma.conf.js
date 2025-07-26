module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // Leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/angular-admin-panel"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
      thresholds: {
        global: {
          statements: 90, // Set minimum coverage for statements
          branches: 90, // Set minimum coverage for branches
          functions: 90, // Set minimum coverage for functions
          lines: 90, // Set minimum coverage for lines
        },
      },
    },
    reporters: ["progress", "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
