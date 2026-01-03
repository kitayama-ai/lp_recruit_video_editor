document.addEventListener('DOMContentLoaded', () => {
    // Clone marquee content for seamless infinite scroll
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach(marquee => {
        // Double the content to ensure smooth loop on wide screens
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content + content + content;
    });

    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // stop observing once visible to prevent re-triggering (optional style choice)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});
