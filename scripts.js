// 🌟 DOM Elements
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li a');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const signupForm = document.getElementById('signup-form');
const scrollTopBtn = document.querySelector('.scroll-top');

// Current testimonial index
let currentTestimonial = 0;

// ✅ Navigation Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle hamburger animation
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.backgroundColor = '#6c63ff';
    } else {
        hamburger.style.transform = 'rotate(0)';
        hamburger.style.backgroundColor = '#3f3d56';
    }
});

// ✅ Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ✅ Change header style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// ✅ Testimonials Slider Logic
function showTestimonial(index) {
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
}

// ✅ Next Testimonial
nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
});

// ✅ Previous Testimonial
prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentTestimonial);
});

// ✅ Dot Navigation for Testimonials
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// ✅ Auto-Slide Testimonials Every 5 Seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}, 5000);

// ✅ Scroll to Top Button Functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ✅ Form Submission (Basic Validation)
if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            alert('✅ Thank you! Your message has been sent.');
            signupForm.reset();
        } else {
            alert('❌ Please fill out all fields before submitting.');
        }
    });
}
