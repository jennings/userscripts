// ==UserScript==
// @name         Mastodon column width
// @description  Expands the width of columns on some of the popular Mastodon instances.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20171113
// @run-at       document-body
// @match        https://mastodon.social/
// @match        https://mastodon.social/web/*
// @match        https://mastodon.xyz/
// @match        https://mastodon.xyz/web/*
// @match        https://mastodon.cloud/
// @match        https://mastodon.cloud/web/*
// @match        https://social.tchncs.de/
// @match        https://social.tchncs.de/web/*
// @match        https://social.targaryen.house/
// @match        https://social.targaryen.house/web/*
// ==/UserScript==

(function() {
  "use strict";

  addStyleBlock(`
    .column {
      flex: 1 0 330px
    }
  `);

  function addStyleBlock(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
})();
