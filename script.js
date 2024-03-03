"use strict";
const descriptions = document.querySelectorAll(".description");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Showing & hiding the description section
    btn.parentElement.parentElement
      .querySelector(".description")
      .classList.toggle("hide");

    // changing the icon of plus/minus
    let img = btn.querySelector("img");
    if (img.getAttribute("src") === "./assets/images/icon-plus.svg") {
      img.src = "./assets/images/icon-minus.svg";
    } else {
      img.src = "./assets/images/icon-plus.svg";
    }

    // console.log(btn.nextSibling);
  });
});
console.log("Thi is");
