// ==UserScript==
// @name         GitLab Rainbow
// @description  Makes the GitLab menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20171113
// @match        https://gitlab.com/*
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function () {
  "use strict";

  addStyleBlock(`
    header.navbar-gitlab {
      background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    }

    header.navbar-gitlab .side-nav-toggle {
      background-color: rgba(255, 255, 255, 0.5);
    }
  `);

  function addStyleBlock(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
})();
