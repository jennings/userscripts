// ==UserScript==
// @name          Dismiss Medium Nag Dialog
// @description   Dismiss the nag to sign up for Medium
// @author        Stephen Jennings
// @namespace     http://jennings.io/
// @version       0.1
// @match         *://*/*
// @grant         none
// ==/UserScript==

(function () {
  "use strict";

  if (isMedium()) {
    console.log("Detected Medium");
    let dismiss, timeout;

    // Try to dismiss the nag
    dismiss = setInterval(() => {
      if (dismissNagDialog()) {
        clearInterval(dismiss);
        clearTimeout(timeout);
      }
    }, 200);

    // Give up after 5 seconds
    timeout = setTimeout(() => {
      clearInterval(dismiss);
      console.log("Gave up trying to dismiss the Medium nag dialog");
      showToast("Gave up");
    }, 5000);
  }

  function dismissNagDialog() {
    const dismissButton = document.querySelector(
      `.overlay button[data-action=overlay-close]`
    );
    if (dismissButton) {
      dismissButton.click();
      console.log("Dismissed Medium nag dialog");
      showToast("Dismissed Medium nag");
      return true;
    }
  }

  function isMedium() {
    return !!document.querySelector(
      `meta[name="twitter:app:name:iphone"][content=Medium]`
    );
  }

  function showToast(msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.right = "0";
    div.style.zIndex = "9001";
    div.style.color = "black";
    div.style.backgroundColor = "white";
    div.style.border = "solid 1px black";
    div.style.padding = "2px";
    div.style.fontSize = "13px";
    div.style.cursor = "pointer";
    div.addEventListener("click", () => div.remove());

    document.body.appendChild(div);
  }
})();
