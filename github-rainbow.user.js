// ==UserScript==
// @name         GitHub Rainbow
// @description  Makes the GitHub menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20170309
// @match        https://github.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function() {
  'use strict';

  GM_addStyle('.header {' +
      'background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);' +
      'padding-top: 3px;' +
      'padding-bottom: 3px;' +
    '}');

  GM_addStyle('.header .container {' +
    'background-color: rgba(100, 100, 100, 0.5);' +
    'border-radius: 15px;' +
    'padding: 5px 10px;' +
  '}');

  GM_addStyle('.header .header-search-scope {' +
    'border-right-color: rgba(255, 255, 255, 0.75);' +
  '}');

})();
