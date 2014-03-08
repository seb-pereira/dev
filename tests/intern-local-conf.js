// Intern configuration file to run tests on local browsers
//
// #1 - start selenium server on port 4444
// #2 - run: node deliteful/node_modules/intern/runner.js config=dev/tests/<this file>
//
//selenium server info & download: http://selenium-release.storage.googleapis.com/index.html
//to test Chrome on linux, setup chrome driver:
//	info     :  http://code.google.com/p/selenium/wiki/ChromeDriver
//	download :  http://chromedriver.storage.googleapis.com/index.html
define({
	maxConcurrency: 1,
	useSauceConnect: false,

	suites: ["deliteful/tests/unit/ProgressIndicator"],
	//functionalSuites: ["deliteful/tests/functional/all"],

	reporters: ["runner", "console", "lcov"],
	environments: [
		{ browserName: "chrome" },
		{ browserName: "firefox" }
	],

	webdriver:  {
		host: "localhost",
		port: 4444
	},
	excludeInstrumentation: /^(requirejs|dcl|dojo|dpointer|delite\/|deliteful\/tests|dev\/tests|.*themes|.*transitions)/
});