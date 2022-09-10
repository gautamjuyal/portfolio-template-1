"use strict";

const ham = document.querySelector("#ham-menu");
const hamDropdown = document.querySelector("#dropdown-menu");

const hamMenu = () => {
  hamDropdown.classList.toggle("show");
};

ham.addEventListener("click", () => {
  console.log("Clicked!");
  hamMenu();
});
