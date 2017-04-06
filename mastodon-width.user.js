// ==UserScript==
// @name         Mastodon column width
// @description  Expands the width of columns on some of the popular Mastodon instances.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20170405.1
// @grant        GM_addStyle
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
  'use strict';

  GM_addStyle('.column {' +
      'flex: 1 0 330px' +
    '}');

})();
