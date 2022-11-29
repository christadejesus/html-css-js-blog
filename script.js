/* TOP NAV */
// const menuBtn = document.getElementById("menu-btn");
// const linkList = document.getElementById("link-list");

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//  linkList.classList.toggle("open");
// }

/* MORE/LESS BUTTONS */
let moreBtn = document.querySelectorAll(".more-btn");

for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener("click", function () {
    moreBtn[i].parentNode.classList.toggle("visible");
  });
}
