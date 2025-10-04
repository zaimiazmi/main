function playGame() {
  alert("Launching Cyberwise... (nanti link ke Roblox/itch)");
}

// Fade-out loading overlay bila semua asset ready
window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  const splash = document.getElementById("loading-logo");
  if (splash) {
    splash.classList.add("fade-out");
    setTimeout(() => (splash.style.display = "none"), 600);
  }
});

// Kecilkan logo + solidkan header bila scroll
const header = document.getElementById("site-header");
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll);
onScroll();
