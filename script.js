document.addEventListener('DOMContentLoaded', function() {
    console.log('[DEBUG] DOMContentLoaded fired');

    // --- Loading Logo Logic ---
    const loadingOverlay = document.getElementById('loading-logo');
    console.log('[DEBUG] loadingOverlay exists:', !!loadingOverlay);
    const loadingImg = document.getElementById('loading-logo-img');
    if (loadingImg) {
        loadingImg.addEventListener('load', () => console.log('[DEBUG] Loading image loaded OK:', loadingImg.src));
        loadingImg.addEventListener('error', () => console.log('[DEBUG][ERROR] Loading image FAILED to load:', loadingImg.src));
        console.log('[DEBUG] Loading image tag present with src:', loadingImg.getAttribute('src'));
    } else {
        console.log('[DEBUG][WARN] Loading image element not found');
    }
    const body = document.body;

    // Add 'loading' class to body to hide main content initially
    body.classList.add('loading');
    console.log('[DEBUG] Added body.loading class');

    // Set timer for loading screen (5000ms = 5 seconds)
    setTimeout(() => {
    console.log('[DEBUG] Starting fade-out of loading overlay');
        // Add 'fade-out' class to start fade-out animation
        loadingOverlay.classList.add('fade-out');

        // After fade-out animation finishes (500ms), remove the element
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            console.log('[DEBUG] Loading overlay display set to none');
            // Remove 'loading' class from body to show main content
            body.classList.remove('loading');
            console.log('[DEBUG] Removed body.loading class, content should be visible');
        }, 500);

    }, 5000); // <-- Duration of the loading screen


    // --- Scrolled Effect for Navigation Bar ---
    const navbar = document.getElementById('navbar');
    console.log('[DEBUG] Navbar found:', !!navbar);
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Fade-in Animation on Scroll for Sections ---
    const sections = document.querySelectorAll('.section');
    console.log('[DEBUG] Sections count:', sections.length);
    const observerOptions = {
        root: null, // observes viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});