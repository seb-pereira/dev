#!/bin/bash
STOP_URL=http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
echo "sending stop request..."
RES=`wget -q -O - ${STOP_URL}`
echo "server response: ${RES}"
