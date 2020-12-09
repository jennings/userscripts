// ==UserScript==
// @name         Okta - Hide plugin nag
// @namespace    https://jennings.io/
// @version      1.201209
// @description  I know you want me to install the browser plugin. I don't want it. Please stop moving UI around to nag me.
// @author       Stephen Jennings
// @match        https://*.okta.com/app/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const style = document.createElement("style");
  style.innerText = `
[data-se=install-plugin-required] {
  display: none;
}`;
  document.body.appendChild(style);
})();
