// ==UserScript==
// @name         GitHub Rainbow
// @description  Makes the GitHub menu bar more fabulous.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20230629
// @match        https://github.com/*
// @run-at       document-start
// ==/UserScript==

// Inspired by: https://twitter.com/sarah_edo/status/837454918130659328

(function () {
  "use strict";

  const root = document.querySelector(".js-header-wrapper").parentElement;
  addDivAsFirstChild(root, "rainbow");

  function addDivAsFirstChild(node, classname) {
    const div = document.createElement("div");
    div.classList.add(classname);
    div.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
    div.style.width = "100%";
    div.style.height = "2px";
    node.prepend(div);
  }

  function addStyleBlock(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
})();
