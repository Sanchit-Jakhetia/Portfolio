// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Set initial theme based on local storage or default to dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light-mode') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
} else {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.getElementById('mobile-menu-button').innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    } else {
        mobileMenuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
    }
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple form submission handling (for demonstration)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    console.log('Form submitted!');
    console.log('Name:', document.getElementById('name').value);
    console.log('Email:', document.getElementById('email').value);
    console.log('Message:', document.getElementById('message').value);

    formMessage.classList.remove('hidden', 'text-red-500');
    formMessage.classList.add('text-green-600');
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';

    contactForm.reset(); // Clear the form
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000); // Hide message after 5 seconds
});
