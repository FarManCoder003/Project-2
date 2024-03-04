let back = document.querySelector(".back");
let scrollToTopp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
back.addEventListener("click", () => {
  scrollToTopp();
});
window.addEventListener("scroll", () => {
  let scrolling = window.scrollY;
  if (scrolling > 100) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
});
