// ==UserScript==
// @name         Bedrock audio skip
// @namespace    https://github.com/pepperonijail77/
// @version      1.0
// @description  Plays all Bedrock audio at 100.0x speed, effectively skipping it
// @match        *://app.bedrocklearning.org/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', () => {
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function() {
        this.playbackRate = 100.0;
        return originalPlay.call(this);
    };
});
