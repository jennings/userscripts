// ==UserScript==
// @name         Zoom show web link
// @description  Adds a link to the Zoom web client to the join page.
// @author       Stephen Jennings
// @namespace    http://jennings.io/
// @version      1.20200622.0
// @match        https://*.zoom.us/j/*
// @run-at       document-start
// ==/UserScript==

(function() {
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

  let attempts = 4;
  const id = setInterval(() => {
    const meetingId = getMeetingIdFromLocation();
    const meetingUrl = getWebClientUrl(meetingId);

    const div = document.createElement("div");
    div.innerHTML = `Web client: <a href="${meetingUrl}">${meetingUrl}</a>`;

    const parentElement = document.querySelector("h3[role=presentation]");

    if (parentElement != null) {
      parentElement.appendChild(div);
      clearInterval(id);
    } else if (attempts-- <= 0) {
      document.body.appendChild(div);
      clearInterval(id);
    }
  }, 100);
})();
