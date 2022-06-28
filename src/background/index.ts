import browser from 'webextension-polyfill';

const initApp = async (remotePort) => {
  browser.runtime.onConnect.removeListener(initApp);
  //await initialize(remotePort);
  console.log('BG - remotePort : ', remotePort);
};

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('BG - request : ', request);
  console.log('BG - sender : ', sender);
  console.log('BG - sendResponse : ', sendResponse);

  browser.runtime.onConnect.addListener(initApp);
});

export {};
