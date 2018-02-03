ORANGE='\033[1;33m';
GREEN='\033[1;32m';
DEFAULT='\033[0m';

clear && \
echo -e ${ORANGE}Removing old build from server... && \
ssh ${WEBUSER}@${IP} 'rm -Rf /www/data/*' && \
echo -e ${GREEN}Deleted files. && \
echo -e ${ORANGE}Building package... && \
echo -e ${DEFAULT}
npm run-script build && \
echo -e ${GREEN}Build complete. && \
echo -e ${ORANGE}Moving build to server... && \
echo -e ${DEFAULT} && \
scp -r ./build/* ${WEBUSER}@${IP}:/www/data/ && \
echo -e ${GREEN}Success. && \
echo -e ${DEFAULT};
