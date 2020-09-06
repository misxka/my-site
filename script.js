"use strict";

let body = document.querySelector('body');
window.onscroll = function () {
    if (body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        body.style.background = "#dd4444";
    }
};