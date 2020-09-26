const rootDir = "../../";
const jestConfigFilesPath = "<rootDir>/config/jest";
const coverage = require("./coverage-threshold.json");

module.exports = {
    rootDir: rootDir,
    clearMocks: true,
    verbose: true,
    setupFiles: [`${jestConfigFilesPath}/enzyme.config`],
    moduleFileExtensions: ["js", "jsx"],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            ...coverage
        }
    },
    coverageReporters: ["json-summary", "text-summary", "html"],
    collectCoverageFrom: ["!src/**/test/*.{js, jsx}", "src/**/*.{js,jsx}", "!src/**/*.stories.js"],
    coveragePathIgnorePatterns:  ["/node_modules/"],
    coverageDirectory: "<rootDir>/test/coverage-report",
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["node_modules"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$":"next/babel"
    }
}
