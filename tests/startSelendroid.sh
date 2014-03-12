#!/bin/bash
JAVA_BIN=/usr/bin/java
SELENDROID_DIR=servers/selendroid
LOG_FILE=logs/selendroid.log

if [ ! "${ANDROID_HOME}" ]; then
	echo "Ensure ANDROID_HOME environment variable is correctly defined."
	exit 1
fi

echo "Starting Selendroid with ANDROID_HOME=${ANDROID_HOME} ..." | tee ${LOG_FILE}
${JAVA_BIN} -jar ${SELENDROID_DIR}/selendroid-standalone.jar -verbose | tee -a ${LOG_FILE}

#-port
#    Specify the port for selendroid to run on, the default is 4444.
#-app, -aut
#    Specify the location of the application under test. Absolute path expected.
#-timeoutEmulatorStart
#    Specify the timeout in milliseconds to start emulators, the default is 300000.
#-emulatorPort
#    Specify the port number to start running emulators on.
#-deviceScreenshot
#    This enables screenshots to be taken on the device instead of using the ddmlib library.
#-installedApp
#    Developers who already have the app installed (and emulator running) must specify the installed app using this format: tld.company.app/ActivityClass:version.
#-verbose
#    This prints additional log statements making it easier to identify issues