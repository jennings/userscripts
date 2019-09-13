// ==UserScript==
// @name         GitHub Rainbow
// @description  Makes the GitHub menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20190814
// @match        https://github.com/*
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function() {
  'use strict';

  addDivAsFirstChild(document.querySelector('.Header'), 'rainbow');

  addStyleBlock(`
     .Header > .rainbow {
       background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
       position: absolute;
       top: 0; left: 0; right: 0;
       height: 5px;
     }
  `)

  function addDivAsFirstChild(node, classname) {
    const div = document.createElement('div');
    div.classList.add('rainbow');
    node.prepend(div);
  }

  function addStyleBlock(css) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
  }

})();
