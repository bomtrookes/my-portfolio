console.log("Connected")

// Project Modal
// change modal to regular div and manipulate based on screen size
 const openList = document.querySelector(".list-open");
 const closeList = document.querySelector(".list-close")
 const listModal = document.querySelector(".list-modal");
 // List-It
 openList.addEventListener("click", () => {
   listModal.classList.toggle("active")
  })
  closeList.addEventListener("click", () => {
    listModal.classList.toggle("active")
  })
  //Puzzlend
  const openPuzz = document.querySelector(".puzz-open");
  const closePuzz = document.querySelector(".puzz-close")
  const puzzModal = document.querySelector(".puzz-modal");
 openPuzz.addEventListener("click", () => {
  puzzModal.classList.toggle("active")
 })
 closePuzz.addEventListener("click", () => {
  puzzModal.classList.toggle("active")
 })
 // About
 const openAbout = document.querySelector(".about-open");
 const closeAbout = document.querySelector(".about-close")
 const aboutModal = document.querySelector(".about-modal");

 openAbout.addEventListener("click", () => {
  aboutModal.classList.toggle("active")
 })
 closeAbout.addEventListener("click", () => {
  aboutModal.classList.toggle("active")
 })
// Navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// Menu
const menu = document.querySelector(".menu");
const burger = document.querySelector("#burger");
const closeMenu = document.querySelector("#close-menu");
const links = document.querySelectorAll(".menu a")

burger.addEventListener("click", () => {
  menu.style.right = "0";
})
closeMenu.addEventListener("click", () => {
  menu.style.right = "-100vw";
})
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.right = "-100vw";
    console.log("link clicked")
  })
})
