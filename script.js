// You can add any interactive JavaScript functionality here if needed.
console.log("Welcome to my portfolio!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the section is visible

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible'); // Add class to make it visible
            } else {
                section.classList.remove('visible'); // Remove class if not visible
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});

// Back to Top button functionality
const backToTopBtn = document.getElementById('backToTopBtn');

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};

// Scroll smoothly to the top when the button is clicked
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
