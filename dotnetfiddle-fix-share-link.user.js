// ==UserScript==
// @name         DotNetFiddle fix share link
// @description  The "Share" link in DotNetFiddle is broken in Firefox.
// @author       Stephen Jennings
// @namespace    https://jennings.io/
// @version      1.20200623
// @match        https://dotnetfiddle.net/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  addStyleBlock(`
    .copy-clipboard {
      position: static;
    }
  `)

  function addStyleBlock(css) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }
})();
