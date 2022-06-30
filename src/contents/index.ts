import type { PlasmoContentScript } from "plasmo"
import browser from 'webextension-polyfill';
import PortStream from 'extension-port-stream';

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"]
}

window.addEventListener("load", () => {
  console.log("content script loaded")
  const extensionPort = browser.runtime.connect({ name: 'popup' });
  const connectionStream = new PortStream(extensionPort);
  
  console.log('CS - connectionStream', connectionStream);
  //document.body.style.background = "pink"
})

