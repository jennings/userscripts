// ==UserScript==
// @name         Zoom show web link
// @description  Adds a link to the Zoom web client to the join page.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20200622.0
// @match        https://*.zoom.us/j/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  function getMeetingIdFromLocation() {
    const { pathname } = location;
    const re = /\/j\/(\d+)/;
    const match = pathname.match(re);
    if (match) {
      return match[1];
    }
  }

  function getWebClientUrl(meetingId) {
    return `https://zoom.us/wc/join/${meetingId}`;
  }

  const id = setTimeout(() => {
    const meetingId = getMeetingIdFromLocation();
    const meetingUrl = getWebClientUrl(meetingId);

    const div = document.createElement("div");
    div.innerHTML = `Web client: <a href="${meetingUrl}">${meetingUrl}</a>`;

    const parentElement =
      document.querySelector("h3[role=presentation]") || document.body;
    parentElement.appendChild(div);
  }, 100);
})();
