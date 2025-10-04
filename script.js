function playGame() {
  alert("Service under maintenance. Please try again later.");
}

// Splash 5s walaupun page dah load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("loading");
    const splash = document.getElementById("loading-logo");
    if (splash) {
      splash.classList.add("fade-out");
      setTimeout(() => (splash.style.display = "none"), 600);
    }
  }, 5000);
});

// Kecilkan logo bila scroll
const header = document.getElementById("site-header");
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll);
onScroll();

/* =========================
   MOBILE MENU TOGGLE
   ========================= */
const mobileMenu = document.getElementById("mobile-menu");
const toggleBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");

function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.hidden = false;
  mobileMenu.classList.add("show");
  toggleBtn?.setAttribute("aria-expanded", "true");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("show");
  mobileMenu.hidden = true;
  toggleBtn?.setAttribute("aria-expanded", "false");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}
toggleBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);
mobileMenu?.addEventListener("click", (e) => { if (e.target === mobileMenu) closeMenu(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !mobileMenu.hidden) closeMenu(); });

/* =========================
   ACTIVE STATE / SCROLL-SPY
   ========================= */
const navLinks = Array.from(document.querySelectorAll('.nav-list a, .mobile-menu-list a'));
const sectionIds = ['home', 'showcase', 'portfolio', 'about'];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function setActive(hash) {
  const target = (hash && hash.startsWith('#')) ? hash : '#home';
  navLinks.forEach(a => a.classList.remove('active'));
  navLinks.filter(a => a.getAttribute('href') === target).forEach(a => a.classList.add('active'));
}

function updateActiveOnScroll() {
  const offset = 120; // buffer untuk header
  const y = window.scrollY + offset;
  let current = sections[0]?.id || 'home';
  for (const sec of sections) {
    if (sec.offsetTop <= y) current = sec.id;
  }
  setActive('#' + current);
}

// Initial state
setActive(location.hash || '#home');
updateActiveOnScroll();
window.addEventListener('scroll', updateActiveOnScroll);
window.addEventListener('hashchange', () => setActive(location.hash));

// Sync & close on mobile link tap
document.querySelectorAll('.mobile-menu-list a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    setActive(a.getAttribute('href'));
    setTimeout(closeMenu, 50);
  });
});
