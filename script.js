// ===== Site Close Toggle =====
const CLOSE_SITE = false; // <-- Set to true to close site, false to open

document.addEventListener('DOMContentLoaded', function() {
  if (CLOSE_SITE && window.location.pathname !== '/closed.html') {
    // Always redirect to closed.html if site is closed and not already on closed.html
    window.location.replace('/closed.html');
    return;
  }
  if (!CLOSE_SITE && window.location.pathname === '/closed.html') {
    window.location.replace('/');
    return;
  }

  // (Optional) If you want to keep redirect for unknown paths when site is open:
  if (!CLOSE_SITE) {
    var allowedPrefixes = [
      '/',
      '/index.html',
      '/showcase',
      '/projects',
      '/portfolio',
      '/cyberia-game.html',
      '/closed.html'
    ];
    var currentPath = window.location.pathname;
    var allowed = allowedPrefixes.some(prefix => currentPath === prefix || currentPath.startsWith(prefix + '/'));
    if (!allowed) {
      window.location.replace('https://zzaimii.com');
    }
  }
});
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
// ===== Image Skeleton Loader =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    // Skip if already wrapped
    if (img.parentElement.classList.contains('img-wrapper')) return;

    // Wrap image in skeleton container
    const wrapper = document.createElement('div');
    wrapper.className = 'img-wrapper';
    wrapper.style.borderRadius = window.getComputedStyle(img).borderRadius;
    
    // Set wrapper dimensions based on image attributes or defaults
    if (img.width && img.height) {
      wrapper.style.paddingBottom = (img.height / img.width * 100) + '%';
      wrapper.style.position = 'relative';
    } else if (img.naturalWidth && img.naturalHeight) {
      wrapper.style.paddingBottom = (img.naturalHeight / img.naturalWidth * 100) + '%';
      wrapper.style.position = 'relative';
    } else {
      // Default aspect ratio (16:9) if no dimensions available
      wrapper.style.paddingBottom = '56.25%';
      wrapper.style.position = 'relative';
    }
    
    img.parentElement.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Create skeleton overlay
    const skeleton = document.createElement('div');
    skeleton.className = 'img-skeleton';
    wrapper.appendChild(skeleton);

    // Add lazy class for fade-in effect
    img.classList.add('lazy');

    // Handle image load
    img.addEventListener('load', function() {
      img.classList.add('loaded');
      skeleton.classList.add('hidden');
    });

    // Handle load error - keep skeleton visible
    img.addEventListener('error', function() {
      img.style.display = 'none';
      skeleton.style.background = '#e5e5e5';
    });

    // Trigger load if already cached
    if (img.complete) {
      img.classList.add('loaded');
      skeleton.classList.add('hidden');
    }
  });
});