// Run automated tests on local browsers:
//
// #1 - start selenium server on port 4444
// #2 - run: node deliteful/node_modules/intern/runner.js config=dev/tests/<this file>
//
//selenium server info & download: http://selenium-release.storage.googleapis.com/index.html
//to test Chrome on linux, setup chrome driver:
//	info     :  http://code.google.com/p/selenium/wiki/ChromeDriver
//	download :  http://chromedriver.storage.googleapis.com/index.html
//
//Run tests on Android devices:
//
// #1 - ensure capability proxyUrl: "your_local_host:9000" is defined
// #2 - start selendroid server on port 4444
// #3 - run: node deliteful/node_modules/intern/runner.js config=dev/tests/<this file>
define({
	maxConcurrency: 1,
	useSauceConnect: false,
	proxyUrl: "http://<your ip/host>:9000", //required for local test on virtual and real android devices

	suites: ["deliteful/tests/unit/ProgressIndicator"],
	//functionalSuites: ["deliteful/tests/functional/all"],
	reporters: ["runner", "console", "lcov"],
	environments: [
//		{ browserName: "android", emulator: false } //to test real device
		{ browserName: "android", emulator: true, androidTarget: "ANDROID15" }, //4.0.3
		{ browserName: "android", emulator: true, androidTarget: "ANDROID16" }, //4.1.2
		{ browserName: "android", emulator: true, androidTarget: "ANDROID17" }, //4.2.2
//		{ browserName: "android", emulator: true, androidTarget: "ANDROID19" }  //4.4.2
	],
	webdriver: {host: "localhost", port: 4444},
	excludeInstrumentation: /^(requirejs|dcl|dojo|dpointer|delite\/|deliteful\/tests|dev\/tests|.*themes|.*transitions)/
});