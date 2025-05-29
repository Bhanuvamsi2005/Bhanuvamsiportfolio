// Initialize AOS with enhanced settings and error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            disable: 'mobile' // Disable on mobile for better performance
        });
    } catch (error) {
        console.warn('AOS initialization failed:', error);
    }
});

// Enhanced Typing Animation with error handling and cleanup
const typingText = document.querySelector('.typing-text');
const texts = [
    "Full Stack Developer",
    "Django Developer",
    "Java Developer",
    "React Developer",
    "Python Developer",
    "Web Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Database Specialist",
    "AWS Cloud Practitioner"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 50;
let typingTimeout = null;

function typeText() {
    if (!typingText) return; // Guard clause

    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 30; // Faster deletion
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100; // Slightly slower typing for better readability
    }

    // Adjust timing for different states
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 1500; // Shorter pause at the end of typing
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500; // Pause before starting new text
    }

    typingTimeout = setTimeout(typeText, typingDelay);
}

// Cleanup function for typing animation
function cleanupTypingAnimation() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    if (typingText) {
        typingText.textContent = '';
        typeText();
    }
});

// Cleanup on page unload
window.addEventListener('unload', cleanupTypingAnimation);

// Enhanced Navbar scroll effect with throttling
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let scrollTimeout = null;

function handleScroll() {
    if (scrollTimeout) return; // Throttle scroll events

    scrollTimeout = setTimeout(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scrolled');
        } else {
            navbar.classList.add('scrolled');
        }
        
        lastScroll = currentScroll;
        scrollTimeout = null;
    }, 100); // Throttle to 100ms
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Enhanced Mobile menu with proper cleanup
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

function toggleMenu() {
    if (!hamburger || !navLinks) return;

    isMenuOpen = !isMenuOpen;
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

// Add click event listener to hamburger
hamburger?.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
        toggleMenu();
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// Close menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && isMenuOpen) {
        toggleMenu();
    }
});

// Enhanced smooth scrolling with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (!target) return;

        const targetPosition = target.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + (distance * ease));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        requestAnimationFrame(animation);
        
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// Enhanced parallax effect with performance optimization
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const profileImage = document.querySelector('.profile-image');
            
            if (hero) {
                hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
            }
            
            if (profileImage) {
                profileImage.style.transform = `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.05}deg)`;
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
}, { passive: true });

// Enhanced skill items animation with performance optimization
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    let animationFrame = null;
    
    item.addEventListener('mousemove', (e) => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        
        animationFrame = requestAnimationFrame(() => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
    });
    
    item.addEventListener('mouseleave', () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Enhanced project cards with performance optimization
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    let animationFrame = null;
    
    card.addEventListener('mousemove', (e) => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        
        animationFrame = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
    });
    
    card.addEventListener('mouseleave', () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Enhanced social icons with optimized particle effect
const socialIcons = document.querySelectorAll('.social-icon');
const particles = new Set();

function createParticle(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);
        particles.add(particle);
        
        const angle = (i / 10) * Math.PI * 2;
        const velocity = 2;
        const size = Math.random() * 4 + 2;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = 'var(--primary-color)';
        particle.style.position = 'fixed';
        particle.style.borderRadius = '50%';
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        let posX = centerX;
        let posY = centerY;
        let velX = Math.cos(angle) * velocity;
        let velY = Math.sin(angle) * velocity;
        let opacity = 1;
        
        function animateParticle() {
            if (opacity <= 0) {
                particle.remove();
                particles.delete(particle);
                return;
            }
            
            posX += velX;
            posY += velY;
            opacity -= 0.02;
            
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
            particle.style.opacity = opacity;
            
            requestAnimationFrame(animateParticle);
        }
        
        requestAnimationFrame(animateParticle);
    }
}

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        if (particles.size < 50) { // Limit total particles
            createParticle(icon);
        }
    });
});

// Cleanup particles on page unload
window.addEventListener('unload', () => {
    particles.forEach(particle => particle.remove());
    particles.clear();
});

// Add CSS for particles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .particle {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    </style>
`);

// Enhanced section transitions
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Email Form Handling
function sendEmail(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = form.querySelector('.form-status');
    
    // Get form data
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    
    // Validate form
    if (!name || !email || !message) {
        showFormStatus(statusDiv, 'Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showFormStatus(statusDiv, 'Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Achanta Bhanu Vamsi',
        to_email: 'achantabhanuvamsi@gmail.com',
        reply_to: email
    };
    
    // Send email using EmailJS
    emailjs.send('service_ecg5w9w', 'template_uxmy8c9', templateParams, 'Gq9JtQMLvkWCrkf2j')
        .then(() => {
            showFormStatus(statusDiv, 'Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            showFormStatus(statusDiv, 'Failed to send message. Please try again later.', 'error');
        })
        .finally(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        });
}

function showFormStatus(element, message, type) {
    element.textContent = message;
    element.className = `form-status ${type}`;
    
    // Scroll to status message
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide status after 5 seconds
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize EmailJS
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    emailjs.init('Gq9JtQMLvkWCrkf2j');
    
    // Add form submit event listener
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});
