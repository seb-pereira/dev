#!/bin/bash
JAVA_BIN=/usr/bin/java
SAUCECONNECT_DIR=servers/sauce-connect
LOG_FILE=logs/sauce-connect.log

if [ ! "${SAUCE_USERNAME}" ]; then
	echo "Ensure SAUCE_USERNAME environment variable is correctly defined."
	exit 1
fi
if [ ! "${SAUCE_ACCESS_KEY}" ]; then
	echo "Ensure SAUCE_ACCESS_KEY environment variable is correctly defined."
	exit 1
fi

echo "Starting Sauce Connect using account ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} ..."
${JAVA_BIN} -jar ${SAUCECONNECT_DIR}/Sauce-Connect.jar ${SAUCE_USERNAME} ${SAUCE_ACCESS_KEY} \
	--debug \
	--logfile ${LOG_FILE} \
	--se-port 4444

# usage: java -jar Sauce-Connect.jar USERNAME API_KEY [OPTIONS]
#
# -B,--no-ssl-bump-domains <DOMAIN1,DOMAIN2>   Comma-separated list of
#                                              domains. Requests whose host
#                                              matches one of these will
#                                              not be SSL re-encrypted
# -d,--debug                                   Enable verbose debugging.
# -D,--direct-domains <DOMAIN1,DOMAIN2>        Comma-separated list of
#                                              domains. Requests whose host
#                                              matches one of these will be
#                                              relayed directly through the
#                                              internet, instead of through
#                                              the tunnel.
# -f,--readyfile <FILE>                        Ready file that will be
#                                              touched when tunnel is
#                                              ready.
# -F,--fast-fail-regexps <REGEXP1,REGEXP2>     Comma-separated list of
#                                              regular expressions.
#                                              Requests matching one of
#                                              these will get dropped
#                                              instantly and will not go
#                                              through the tunnel.
# -g,--logfilesize <LOGFILESIZE>
# -h,--help                                    Display this help text.
# -i,--tunnel-identifier <TUNNELIDENTIFIER>    Don't automatically assign
#                                              jobs to this tunnel. Jobs
#                                              will use it only by
#                                              explicitly providing the
#                                              right identifier.
# -l,--logfile <LOGFILE>
# -p,--proxy <PROXYHOST:PROXYPORT>             Proxy host and port that
#                                              Sauce Connect should use to
#                                              send connections from
#                                              browsers in the Sauce Labs
#                                              cloud to be able to access
#                                              the AUT.
# -P,--se-port <PORT>                          Port in which Sauce
#                                              Connect's Selenium relay
#                                              will listen for requests.
#                                              Selenium commands reaching
#                                              Connect on this port will be
#                                              relayed to Sauce Labs
#                                              securely and reliably
#                                              through Connect's tunnel.
# -S,--squid-opts <SQUID-OPTIONS>              Configuration used for the
#                                              Squid reverse proxy in our
#                                              end. Use only if directed to
#                                              do so by Sauce Labs support.
# -s,--shared-tunnel                           Let sub-accounts of the
#                                              tunnel owner use the tunnel
#                                              if requested.
# -u,--proxy-user <PROXYUSER>                  Username required to access
#                                              proxy host
# -V,--vm-version <VMVERSION>                  Request a special VM version
#                                              to be booted for the Sauce
#                                              Labs end of the tunnel.
# -v,--version                                 Print the version and exit.
# -x,--rest-url <arg>                          Advanced feature: Connect to
#                                              Sauce REST API at
#                                              alternative URL. Use only if
#                                              directed to do so by Sauce
#                                              Labs support.
# -X,--proxy-password <PROXYPASS>              Password required to access
#                                              proxy host