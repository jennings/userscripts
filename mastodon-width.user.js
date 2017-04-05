// ==UserScript==
// @name         Mastodon column width
// @description  Expands the width of columns on Mastodon.social and Mastodon.xyz. For other instances, you're on your own.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20170404.1
// @match        https://mastodon.social/web/*
// @match        https://mastodon.xyz/web/*
// @grant        GM_addStyle
// @run-at       document-body
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle('.column {' +
      'flex: 1 0 330px' +
    '}');

})();
