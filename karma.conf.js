module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // Leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/angular-admin-panel"),
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "lcov", subdir: "report-lcov" },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: "cobertura", subdir: ".", file: "cobertura.txt" },
        { type: "lcovonly", subdir: ".", file: "report-lcovonly.txt" },
        { type: "teamcity", subdir: ".", file: "teamcity.txt" },
        { type: "text", subdir: ".", file: "text.txt" },
        { type: "text-summary", subdir: ".", file: "text-summary.txt" },
      ],
      check: {
        global: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90,
        },
      },
    },
    reporters: ["progress", "coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    restartOnFileChange: true,
  });
};
