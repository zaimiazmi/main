function playGame() {
  alert("Service under maintenance. Please try again later.");
}

// Splash 5 saat walaupun page dah load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("loading");
    const splash = document.getElementById("loading-logo");
    if (splash) {
      splash.classList.add("fade-out");
      setTimeout(() => (splash.style.display = "none"), 600);
    }
  }, 5000); // 5000 ms = 5 saat
});

// Kecilkan logo bila scroll
const header = document.getElementById("site-header");
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll);
onScroll();
