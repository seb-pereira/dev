// Intern configuration file to run tests on remote SauceLab VMs
//
// !! ensure SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are defined !!
//
// #1 - start sauce connect on port 4444
// #2 - run: node deliteful/node_modules/intern/runner.js config=dev/tests/<this file>
//
//sauce connect settings :  https://saucelabs.com/docs/connect
//the intern settings    :  https://github.com/theintern/intern/wiki/Configuring-Intern
define({
	maxConcurrency: 3,
	useSauceConnect: false,

	suites: [ "deliteful/tests/unit/ProgressIndicator" ],
	//functionalSuites: [ "deliteful/tests/functional/all" ],

	reporters: ["runner", "console", "lcov"],
	environments: [
		{ browserName: "internet explorer", version: "9", platform: "Windows 7" },
		{ browserName: "internet explorer", version: "11", platform: "Windows 8.1" },
		{ browserName: "internet explorer", version: "10", platform: "Windows 8" },

		{ browserName: "firefox", version: "25", platform: [ "Windows 7" ] },
//		{ browserName: "firefox", version: "25", platform: [ "OS X 10.6", "Linux", "Windows 7" ] },
//		{ browserName: "chrome", version: "32", platform: [ "OS X 10.6", "Linux", "Windows 7" ] },
		{ browserName: "chrome", version: "32", platform: [ "Windows 7" ] },
		{ browserName: "safari", version: "6", platform: [ "OS X 10.8" ] },

		{ browserName: "android", platform: "Linux", version: "4.1" },
		{ browserName: "android", platform: "Linux", "device-type": "tablet", version: "4.1" },
		{ browserName: "android", platform: "Linux", version: "4.1" },
		{ browserName: "android", platform: "Linux", "device-type": "tablet", version: "4.0" },
		{ browserName: "android", platform: "Linux", version: "4.0" },

		{ browserName: "iphone", platform: "OS X 10.9", version: "7"},
		{ browserName: "ipad", platform: "OS X 10.9", version: "7"},
		{ browserName: "iphone", platform: "OS X 10.8", version: "6.1"},
		{ browserName: "ipad", platform: "OS X 10.8", version: "6.1"},
		{ browserName: "iphone", platform: "OS X 10.8", version: "6.0"},
		{ browserName: "ipad", platform: "OS X 10.8", version: "6.0"}
	],

	webdriver: {
		host: "localhost",
		port: 4444
	},
	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(requirejs|dcl|dojo|dpointer|delite\/|deliteful\/tests|dev\/tests|.*themes|.*transitions)/
});