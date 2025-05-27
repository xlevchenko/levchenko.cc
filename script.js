function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

window.addEventListener('scroll', function () {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (window.scrollY > 0 && menuLinks.classList.contains('open')) {
        menuLinks.classList.remove('open');
        hamburgerIcon.classList.remove('open');
    }
});

// Add loading class to prevent smooth scrolling on page load
document.documentElement.classList.add('loading');

// Reset scroll position when page loads
window.onload = function() {
    window.scrollTo(0, 0);
    // Remove loading class after scroll reset
    document.documentElement.classList.remove('loading');
};

// Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let isScrolling = false;
    let scrollTimeout;

    // Add scroll event listener to detect fast scrolling
    window.addEventListener('scroll', function() {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        
        // Reset isScrolling after scrolling stops
        scrollTimeout = setTimeout(function() {
            isScrolling = false;
        }, 150);
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If we're scrolling quickly, apply animations immediately without delays
                if (isScrolling) {
                    entry.target.style.transitionDelay = '0s';
                }
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Profile section
        if (section.id === 'profile') {
            section.querySelector('.section__pic-container').classList.add('slide-in-left');
            section.querySelector('.section__text').classList.add('slide-in-right');
        }
        // About section
        else if (section.id === 'about') {
            section.querySelector('.about-details-container').classList.add('fade-in');
            const skillItems = section.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                item.classList.add('scale-in');
                // Only apply delay if not scrolling quickly
                if (!isScrolling) {
                    item.style.transitionDelay = `${index * 0.05}s`;
                }
            });
        }
        // Projects section
        else if (section.id === 'projects') {
            const projectCards = section.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.classList.add('fade-in');
                // Only apply delay if not scrolling quickly
                if (!isScrolling) {
                    card.style.transitionDelay = `${index * 0.2}s`;
                }
            });
        }
        // Contact section
        else if (section.id === 'contact') {
            const contactContainers = section.querySelectorAll('.contact-info-container');
            contactContainers.forEach((container, index) => {
                container.classList.add('slide-in-left');
                // Only apply delay if not scrolling quickly
                if (!isScrolling) {
                    container.style.transitionDelay = `${index * 0.2}s`;
                }
            });
        }
    });

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(element => {
        observer.observe(element);
    });
});