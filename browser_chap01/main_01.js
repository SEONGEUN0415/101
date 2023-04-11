'use strict'

const screenWidth = document.querySelector("#screen__width");
const screenHeight = document.querySelector("#screen__height");
const outerWidth = document.querySelector("#outer__width");
const outerHeight = document.querySelector("#outer__height");
const innerWidth = document.querySelector("#inner__width");
const innerHeight = document.querySelector("#inner__height");
const clientWidth = document.querySelector("#client__width");
const clientHeight = document.querySelector("#iclient__height");

function updateSize() {
  screenWidth.innerHTML = window.screen.width;
  screenHeight.innerHTML= window.screen.height;
  outerWidth.textContent = window.outerWidth;
  outerHeight.textContent = window.outerHeight;
  innerWidth.textContent = window.innerWidth;
  innerHeight.textContent = window.innerHeight;
  clientWidth.textContent = documentElement.clientWidth;
  clientHeight.textContent = documentElement.clientHeight;
}

updateSize();
window.addEventListener("resize", updateSize);