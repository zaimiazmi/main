// Show a floating (fixed) copy of the navbar after you scroll past the hero.
// It looks IDENTICAL to the original — no style changes, only position fixed.

const navBar = document.getElementById('navBar'); // original .bar.nav-bar
const hero = document.getElementById('hero');

let floating = null;

function updateNav(){
  const threshold = hero.offsetTop + hero.offsetHeight - 1; // just past hero

  if (window.scrollY > threshold){
    if (!floating){
      floating = navBar.cloneNode(true);
      floating.removeAttribute('id');       // avoid duplicate IDs
      floating.classList.add('floating');   // .nav-bar.floating (fixed at top)
      document.body.appendChild(floating);
    }
  } else {
    if (floating){
      floating.remove();
      floating = null;
    }
  }
}

// ===== Language switch — pills behave like nav pills =====
  const langBar = document.querySelector(".lang-switch .nav-bar");
  if (langBar) {
    langBar.addEventListener("click", (e) => {
      const target = e.target.closest(".pill");
      if (!target) return;
      e.preventDefault();

      // toggle active class
      [...langBar.querySelectorAll(".pill")].forEach(p => {
        p.classList.toggle("active", p === target);
        p.setAttribute("aria-selected", String(p === target));
      });

      // (Optional) If you want to change the quote text:
      const lang = target.dataset.lang || "EN";
      const quote = document.getElementById("quote-text");
      if (quote) {
        quote.textContent =
          lang === "MY"
            ? "“Reka bentuk bukan sekadar rupa, tetapi juga rasa.”"
            : "“Design is not just what it looks like, but how it feels.”";
      }
    });
  }


window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav);

document.addEventListener('DOMContentLoaded', updateNav);

// Make Play button go to cyberwise.zzaimii.com
document.addEventListener('DOMContentLoaded', function() {
  var playBtn = document.getElementById('play');
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      window.open('https://cyberwise.zzaimii.com', '_blank');
    });
  }
});
