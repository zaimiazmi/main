document.addEventListener('DOMContentLoaded', function() {

    // --- Efek 'scrolled' pada Navigasi ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Animasi Fade-in apabila Scroll ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // memerhati viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari seksyen perlu kelihatan
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan pemerhatian selepas animasi
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});