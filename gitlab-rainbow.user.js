// ==UserScript==
// @name         GitLab Rainbow
// @description  Makes the GitLab menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20170312
// @match        https://gitlab.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function() {
  'use strict';

  GM_addStyle('header.navbar-gitlab {' +
      'background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);' +
    '}');

  GM_addStyle('header.navbar-gitlab .side-nav-toggle {' +
    'background-color: rgba(255, 255, 255, 0.5);' +
  '}');

})();
