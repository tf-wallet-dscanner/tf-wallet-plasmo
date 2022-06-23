import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"]
}

window.addEventListener("load", () => {
  console.log("content script loaded")

  //document.body.style.background = "pink"
})
