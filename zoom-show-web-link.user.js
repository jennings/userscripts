// ==UserScript==
// @name         Zoom show web link
// @description  Unhides the "Join from your browser" link from the Zoom launch page.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20200429
// @match        https://*.zoom.us/j/*
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  addStyleBlock(`
    .webclient.hideme {
      display: inherit;
    }
  `)

  function addStyleBlock(css) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }

})();
