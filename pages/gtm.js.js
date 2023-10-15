// utils/gtm.js
import TagManager from 'react-gtm-module';

const initializeGTM = () => {
  TagManager.initialize({ gtmId: 'GTM-PWNP99H6' }); // Replace 'GTM-XXXXXX' with your GTM container ID
};

export default initializeGTM;
