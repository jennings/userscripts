// ==UserScript==
// @name         Harness Firefox fixer
// @description  Harness doesn't seem to care about Firefox.
// @author       Stephen Jennings
// @namespace    http://jennings.io
// @version      1.2020040301
// @match        https://app.harness.io/
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  addStyleBlock(`
    [data-name='pipelineView'] {
        display: none;
    }
  `);

  function addStyleBlock(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
})();
