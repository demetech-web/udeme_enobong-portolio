document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation drawer on mobile viewports
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dismiss navigation list automatically once an option is selected
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
