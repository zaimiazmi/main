document.addEventListener('DOMContentLoaded', function() {

    // --- Loading Logo Logic ---
    const loadingOverlay = document.getElementById('loading-logo');
    const body = document.body;

    // Add 'loading' class to body to hide main content initially
    body.classList.add('loading');

    // Set timer for loading screen (5000ms = 5 seconds)
    setTimeout(() => {
        // Add 'fade-out' class to start fade-out animation
        loadingOverlay.classList.add('fade-out');

        // After fade-out animation finishes (500ms), remove the element
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            // Remove 'loading' class from body to show main content
            body.classList.remove('loading');
        }, 500);

    }, 5000); // <-- Duration of the loading screen


    // --- Scrolled Effect for Navigation Bar ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Fade-in Animation on Scroll for Sections ---
    const sections = document.querySelectorAll('.section');
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