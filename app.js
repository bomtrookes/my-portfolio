// Project Modal
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
  const closePuzz = document.querySelector(".puzz-close");
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
  const nav = document.querySelector("nav")
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos < 50) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }

  // Menu
  const body = document.querySelector("body");
  const menu = document.querySelector(".menu");
  const burger = document.querySelector("#burger");
  const closeMenu = document.querySelector("#close-menu");
  const links = document.querySelectorAll(".menu a");

  burger.addEventListener("click", () => {
    menu.style.right = "0";
    body.style.position = "fixed"
    menu.style.transition = "all 0.3s";
})
closeMenu.addEventListener("click", () => {
  menu.style.right = "-100vw";
  body.style.position = "static"
  menu.style.transition = "all 0.3s";
})
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.right = "-100vw";
    body.style.position = "static";
    menu.style.transition = "none";
  })
})

// Intersection Observer
const headings = document.querySelectorAll("h2");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if(entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 1
});

headings.forEach(heading => {
  observer.observe(heading)
})
