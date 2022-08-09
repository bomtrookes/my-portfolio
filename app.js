const body = document.querySelector("body");

// Loading Animation
window.onload = function() {
  document.querySelector('.title-box h1').classList.add("fade-up");
  document.querySelector('.title-box h2').classList.add("fade-down");
  document.querySelector('.title-box .title-line').classList.add("enter-right");
  document.querySelector('#resume-btn').classList.add("fade-up");
  document.querySelector('.socials').classList.add("fade-up");
  document.querySelector('#logo').classList.add("fade-in");
  document.querySelector('#burger').classList.add("fade-in");
}

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
  puzzModal.classList.toggle("active");
  // body.style.position = "fixed";
 })
 closePuzz.addEventListener("click", () => {
  puzzModal.classList.toggle("active")
  // body.style.position = "static";
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
  // const body = document.querySelector("body");
  const menu = document.querySelector(".menu");
  const burger = document.querySelector("#burger");
  const closeMenu = document.querySelector("#close-menu");
  const links = document.querySelectorAll(".menu a");

  burger.addEventListener("click", () => {
    menu.style.right = "0";
    body.style.position = "fixed"
    menu.style.transition = "right 0.3s";
})
  closeMenu.addEventListener("click", () => {
    menu.style.right = "-100vw";
    body.style.position = "static"
    menu.style.transition = "right 0.3s";
  })
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.style.right = "-100vw";
      body.style.position = "static";
      menu.style.transition = "none";
    })
  })

// Intersection Observer
const headings = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if(entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 0.2
  //rootMargin: "-100px" makes smaller container, with + you can load an image sooner
});

headings.forEach(heading => {
  observer.observe(heading)
})

// Index
const galPos = () => {
  let container = document.querySelector('.pro-container');
  let pos = document.querySelectorAll('.index .circle');

  container.addEventListener('scroll', (e) => {
      if(container.scrollLeft < (container.scrollWidth / 2)) {
          for(i = 0; i < pos.length; i++) {
          pos[i].style.backgroundColor="grey";
          }
       pos[1].style.backgroundColor="white";
      }
      if(container.scrollLeft > container.scrollWidth / 2.9) {
           for(i = 0; i < pos.length; i++) {
          pos[i].style.backgroundColor="grey";
          }
       pos[0].style.backgroundColor="white";
      }

  })
}
galPos();
window.onresize = galPos();
