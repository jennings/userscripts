// ==UserScript==
// @name         GitHub Rainbow
// @description  Makes the GitHub menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20170809
// @match        https://github.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function() {
  'use strict';

  GM_addStyle(''
    + '.header {'
    +   'background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);'
    +   'padding-top: 3px;'
    +   'padding-bottom: 3px;'
    + '}'

    + '.header .container {'
    +   'background-color: rgba(100, 100, 100, 0.5);'
    +   'border-radius: 15px;'
    +   'padding: 5px 10px;'
    + '}'

    + '.header .header-search, .header .header-search-input {'
    +   'color: white;'
    +   'text-shadow: 1px 1px 1px black;'
    + '}'

    + '.header .header-search-wrapper, .header .header-search-wrapper.focus {'
    +   'background-color: rgba(0, 0, 0, 0.15);'
    + '}'

    + '.header .header-search, .header .header-search-input {'
    +   'color: white;'
    +   'text-shadow: 1px 1px 1px black;'
    + '}'

    + '.header .header-search-scope, .header .header-search-wrapper.focus .header-search-scope {'
    +   'color: white;'
    +   'border-right-color: rgba(255, 255, 255, 0.75);'
    + '}'

    + '.header .header-navlink {'
    +   'color: white;'
    +   'text-shadow: 1px 1px 1px black;'
    + '}'
  );

})();
