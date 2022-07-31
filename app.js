console.log("Connected")
 const openList = document.querySelector(".list-open");
 const closeList = document.querySelector(".list-close")
 const openPuzz = document.querySelector(".puzz-open");
 const closePuzz = document.querySelector(".puzz-close")
 const listModal = document.querySelector(".list-modal");
 const puzzModal = document.querySelector(".puzz-modal");

 openList.addEventListener("click", () => {
  listModal.classList.toggle("active")
 })
 closeList.addEventListener("click", () => {
  listModal.classList.toggle("active")
 })

 openPuzz.addEventListener("click", () => {
  puzzModal.classList.toggle("active")
 })
 closePuzz.addEventListener("click", () => {
  puzzModal.classList.toggle("active")
 })
