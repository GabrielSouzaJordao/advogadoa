// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const service = document.getElementById('form-service').value;

        const phoneNumber = "5511947228898"; // Dra. Renata
        const message = `Olá Dra. Renata, gostaria de agendar uma consulta.%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*E-mail:* ${email}%0A*Serviço:* ${service}`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

        // Visual feedback
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Redirecionando...';
        btn.disabled = true;

        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            btn.textContent = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1000);
    });
}

// Simple Intersection Observer for Fade-in effects
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-up').forEach(el => {
    observer.observe(el);
});
