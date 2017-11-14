// ==UserScript==
// @name         GitHub Rainbow
// @description  Makes the GitHub menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20171113
// @match        https://github.com/*
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function() {
  'use strict';

  addStyleBlock(`
     .Header {
       background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
       padding-top: 3px;
       padding-bottom: 3px;
     }

     .Header .container {
       background-color: rgba(100, 100, 100, 0.5);
       border-radius: 15px;
       padding: 5px 10px;
     }

     .Header .header-search, .header .header-search-input {
       color: white;
       text-shadow: 1px 1px 1px black;
     }

     .Header .header-search-wrapper, .header .header-search-wrapper.focus {
       background-color: rgba(0, 0, 0, 0.15);
     }

     .Header .header-search, .header .header-search-input {
       color: white;
       text-shadow: 1px 1px 1px black;
     }

     .Header .header-search-scope, .header .header-search-wrapper.focus .header-search-scope {
       color: white;
       border-right-color: rgba(255, 255, 255, 0.75);
     }

     .Header .header-navlink {
       color: white;
       text-shadow: 1px 1px 1px black;
     }
  `)

  function addStyleBlock(css) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }

})();
