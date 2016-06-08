// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.

define({
    environments: [
        { browserName: 'phantomjs' }
    ],

    // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
    maxConcurrency: 1,

    // Name of the tunnel class to use for WebDriver tests.
    // See <https://theintern.github.io/intern/#option-tunnel> for built-in options
    tunnel: 'NullTunnel',

    // Unit test suite(s) to run in each browser
    suites: [ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

    // Functional test suite(s) to execute against each browser once unit tests are completed
    functionalSuites: [ 'tests/functional/all' ],

    // A regular expression matching URLs to files that should not be included in code coverage analysis. Set to `true`
    // to completely disable code coverage.
    excludeInstrumentation: /^(?:tests|node_modules)\//
});
