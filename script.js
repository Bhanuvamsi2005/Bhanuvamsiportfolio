// // Initialize AOS with enhanced settings and error handling
// document.addEventListener('DOMContentLoaded', () => {
//     try {
//         AOS.init({
//             duration: 800,
//             easing: 'ease-in-out',
//             once: true,
//             disable: 'mobile' // Disable on mobile for better performance
//         });
//     } catch (error) {
//         console.warn('AOS initialization failed:', error);
//     }
// });

// // Enhanced Typing Animation with error handling and cleanup
// const typingText = document.querySelector('.typing-text');
// const texts = [
//     "Full Stack Developer",
//     "Django Developer",
//     "Java Developer",
//     "React Developer",
//     "Python Developer",
//     "Web Developer",
//     "UI/UX Enthusiast",
//     "Problem Solver",
//     "Database Specialist",
//     "AWS Cloud Practitioner"
// ];
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// let typingDelay = 50;
// let typingTimeout = null;

// function typeText() {
//     if (!typingText) return; // Guard clause

//     const currentText = texts[textIndex];
    
//     if (isDeleting) {
//         typingText.textContent = currentText.substring(0, charIndex - 1);
//         charIndex--;
//         typingDelay = 30; // Faster deletion
//     } else {
//         typingText.textContent = currentText.substring(0, charIndex + 1);
//         charIndex++;
//         typingDelay = 100; // Slightly slower typing for better readability
//     }

//     // Adjust timing for different states
//     if (!isDeleting && charIndex === currentText.length) {
//         isDeleting = true;
//         typingDelay = 1500; // Shorter pause at the end of typing
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         textIndex = (textIndex + 1) % texts.length;
//         typingDelay = 500; // Pause before starting new text
//     }

//     typingTimeout = setTimeout(typeText, typingDelay);
// }

// // Cleanup function for typing animation
// function cleanupTypingAnimation() {
//     if (typingTimeout) {
//         clearTimeout(typingTimeout);
//     }
// }

// // Start typing animation when page loads
// window.addEventListener('load', () => {
//     if (typingText) {
//         typingText.textContent = '';
//         typeText();
//     }
// });

// // Cleanup on page unload
// window.addEventListener('unload', cleanupTypingAnimation);

// // Enhanced Navbar scroll effect with throttling
// const navbar = document.querySelector('.navbar');
// let lastScroll = 0;
// let scrollTimeout = null;

// function handleScroll() {
//     if (scrollTimeout) return; // Throttle scroll events

//     scrollTimeout = setTimeout(() => {
//         const currentScroll = window.pageYOffset;
        
//         if (currentScroll <= 0) {
//             navbar.classList.remove('scrolled');
//         } else {
//             navbar.classList.add('scrolled');
//         }
        
//         lastScroll = currentScroll;
//         scrollTimeout = null;
//     }, 100); // Throttle to 100ms
// }

// window.addEventListener('scroll', handleScroll, { passive: true });

// // Enhanced Mobile menu with proper cleanup
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// let isMenuOpen = false;

// function toggleMenu() {
//     if (!hamburger || !navLinks) return;

//     isMenuOpen = !isMenuOpen;
//     hamburger.classList.toggle('active');
//     navLinks.classList.toggle('active');
    
//     // Prevent body scroll when menu is open
//     document.body.style.overflow = isMenuOpen ? 'hidden' : '';
// }

// // Add click event listener to hamburger
// hamburger?.addEventListener('click', toggleMenu);

// // Close menu when clicking outside
// document.addEventListener('click', (e) => {
//     if (isMenuOpen && !hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
//         toggleMenu();
//     }
// });

// // Close menu when clicking a nav link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (isMenuOpen) {
//             toggleMenu();
//         }
//     });
// });

// // Close menu on window resize if open
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 991 && isMenuOpen) {
//         toggleMenu();
//     }
// });

// // Enhanced smooth scrolling with error handling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const target = document.querySelector(targetId);
        
//         if (!target) return;

//         const targetPosition = target.offsetTop - 80;
//         const startPosition = window.pageYOffset;
//         const distance = targetPosition - startPosition;
//         const duration = 1000;
//         let start = null;

//         function animation(currentTime) {
//             if (start === null) start = currentTime;
//             const timeElapsed = currentTime - start;
//             const progress = Math.min(timeElapsed / duration, 1);
//             const ease = easeInOutCubic(progress);
            
//             window.scrollTo(0, startPosition + (distance * ease));
            
//             if (timeElapsed < duration) {
//                 requestAnimationFrame(animation);
//             }
//         }

//         function easeInOutCubic(t) {
//             return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
//         }

//         requestAnimationFrame(animation);
        
//         if (isMenuOpen) {
//             toggleMenu();
//         }
//     });
// });

// // Enhanced parallax effect with performance optimization
// let ticking = false;
// window.addEventListener('scroll', () => {
//     if (!ticking) {
//         requestAnimationFrame(() => {
//             const scrolled = window.pageYOffset;
//             const hero = document.querySelector('.hero');
//             const profileImage = document.querySelector('.profile-image');
            
//             if (hero) {
//                 hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
//             }
            
//             if (profileImage) {
//                 profileImage.style.transform = `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.05}deg)`;
//             }
            
//             ticking = false;
//         });
        
//         ticking = true;
//     }
// }, { passive: true });

// // Enhanced skill items animation with performance optimization
// const skillItems = document.querySelectorAll('.skill-item');
// skillItems.forEach(item => {
//     let animationFrame = null;
    
//     item.addEventListener('mousemove', (e) => {
//         if (animationFrame) {
//             cancelAnimationFrame(animationFrame);
//         }
        
//         animationFrame = requestAnimationFrame(() => {
//             const rect = item.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
            
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
            
//             const rotateX = (y - centerY) / 10;
//             const rotateY = (centerX - x) / 10;
            
//             item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
//         });
//     });
    
//     item.addEventListener('mouseleave', () => {
//         if (animationFrame) {
//             cancelAnimationFrame(animationFrame);
//         }
//         item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
//     });
// });

// // Enhanced project cards with performance optimization
// const projectCards = document.querySelectorAll('.project-card');
// projectCards.forEach(card => {
//     let animationFrame = null;
    
//     card.addEventListener('mousemove', (e) => {
//         if (animationFrame) {
//             cancelAnimationFrame(animationFrame);
//         }
        
//         animationFrame = requestAnimationFrame(() => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
            
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;
            
//             const rotateX = (y - centerY) / 20;
//             const rotateY = (centerX - x) / 20;
            
//             card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
//         });
//     });
    
//     card.addEventListener('mouseleave', () => {
//         if (animationFrame) {
//             cancelAnimationFrame(animationFrame);
//         }
//         card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
//     });
// });

// // Enhanced social icons with optimized particle effect
// const socialIcons = document.querySelectorAll('.social-icon');
// const particles = new Set();

// function createParticle(element) {
//     const rect = element.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
    
//     for (let i = 0; i < 10; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
//         document.body.appendChild(particle);
//         particles.add(particle);
        
//         const angle = (i / 10) * Math.PI * 2;
//         const velocity = 2;
//         const size = Math.random() * 4 + 2;
        
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.background = 'var(--primary-color)';
//         particle.style.position = 'fixed';
//         particle.style.borderRadius = '50%';
//         particle.style.left = `${centerX}px`;
//         particle.style.top = `${centerY}px`;
//         particle.style.pointerEvents = 'none';
//         particle.style.zIndex = '1000';
        
//         let posX = centerX;
//         let posY = centerY;
//         let velX = Math.cos(angle) * velocity;
//         let velY = Math.sin(angle) * velocity;
//         let opacity = 1;
        
//         function animateParticle() {
//             if (opacity <= 0) {
//                 particle.remove();
//                 particles.delete(particle);
//                 return;
//             }
            
//             posX += velX;
//             posY += velY;
//             opacity -= 0.02;
            
//             particle.style.left = `${posX}px`;
//             particle.style.top = `${posY}px`;
//             particle.style.opacity = opacity;
            
//             requestAnimationFrame(animateParticle);
//         }
        
//         requestAnimationFrame(animateParticle);
//     }
// }

// socialIcons.forEach(icon => {
//     icon.addEventListener('mouseenter', () => {
//         if (particles.size < 50) { // Limit total particles
//             createParticle(icon);
//         }
//     });
// });

// // Cleanup particles on page unload
// window.addEventListener('unload', () => {
//     particles.forEach(particle => particle.remove());
//     particles.clear();
// });

// // Add CSS for particles
// document.head.insertAdjacentHTML('beforeend', `
//     <style>
//         .particle {
//             position: fixed;
//             pointer-events: none;
//             z-index: 9999;
//         }
        
//         .hamburger.active span:nth-child(1) {
//             transform: rotate(45deg) translate(5px, 5px);
//         }
        
//         .hamburger.active span:nth-child(2) {
//             opacity: 0;
//         }
        
//         .hamburger.active span:nth-child(3) {
//             transform: rotate(-45deg) translate(7px, -6px);
//         }
//     </style>
// `);

// // Enhanced section transitions
// const sections = document.querySelectorAll('section');
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px'
// };

// const sectionObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//         }
//     });
// }, observerOptions);

// sections.forEach(section => {
//     sectionObserver.observe(section);
// });

// // Email Form Handling
// function sendEmail(e) {
//     e.preventDefault();
    
//     const form = e.target;
//     const submitBtn = form.querySelector('button[type="submit"]');
//     const statusDiv = form.querySelector('.form-status');
    
//     // Get form data
//     const name = form.querySelector('input[name="name"]').value;
//     const email = form.querySelector('input[name="email"]').value;
//     const message = form.querySelector('textarea[name="message"]').value;
    
//     // Validate form
//     if (!name || !email || !message) {
//         showFormStatus(statusDiv, 'Please fill in all fields', 'error');
//         return;
//     }
    
//     if (!isValidEmail(email)) {
//         showFormStatus(statusDiv, 'Please enter a valid email address', 'error');
//         return;
//     }
    
//     // Show loading state
//     submitBtn.classList.add('loading');
//     submitBtn.disabled = true;
    
//     // Prepare template parameters
//     const templateParams = {
//         from_name: name,
//         from_email: email,
//         message: message,
//         to_name: 'Achanta Bhanu Vamsi',
//         to_email: 'achantabhanuvamsi@gmail.com',
//         reply_to: email
//     };
    
//     // Send email using EmailJS
//     emailjs.send('service_9achglp', 'template_uxmy8c9', templateParams, 'Gq9JtQMLvkWCrkf2j')
//         .then(() => {
//             showFormStatus(statusDiv, 'Message sent successfully! I will get back to you soon.', 'success');
//             form.reset();
//         })
//         .catch((error) => {
//             console.error('EmailJS error:', error);
//             showFormStatus(statusDiv, 'Failed to send message. Please try again later.', 'error');
//         })
//         .finally(() => {
//             submitBtn.classList.remove('loading');
//             submitBtn.disabled = false;
//         });
// }

// function showFormStatus(element, message, type) {
//     element.textContent = message;
//     element.className = `form-status ${type}`;
    
//     // Scroll to status message
//     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
//     // Hide status after 5 seconds
//     setTimeout(() => {
//         element.style.display = 'none';
//     }, 5000);
// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Initialize EmailJS
// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize EmailJS with your public key
//     emailjs.init('Gq9JtQMLvkWCrkf2j');
    
//     // Add form submit event listener
//     const contactForm = document.querySelector('.contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', sendEmail);
//     }
// });



/**
 * ACHANTA BHANU VAMSI — Portfolio JavaScript
 * ============================================
 * Features:
 *  - Loader with fake progress
 *  - Custom cursor
 *  - Particle canvas background (Hero)
 *  - Typing animation
 *  - Animated navbar (scroll + active link)
 *  - Hamburger mobile menu
 *  - AOS scroll reveal
 *  - 3D tilt effect on skill/project cards
 *  - Animated skill progress lines
 *  - Counter animation for impact numbers
 *  - Parallax on Hero
 *  - EmailJS contact form with validation
 *  - Back to top button
 *  - Performance via requestAnimationFrame
 */

/* =============================================
   1. LOADER
   ============================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // Minimum display time for aesthetic feel
  setTimeout(() => {
    loader.classList.add('hidden');
    // Initialize everything after loader hides
    initAll();
  }, 2000);
});

function initAll() {
  initCursor();
  initHeroCanvas();
  initTyping();
  initNavbar();
  initHamburger();
  initAOS();
  initTiltEffect();
  initSkillBars();
  initCounters();
  initParallax();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
}

/* =============================================
   2. CUSTOM CURSOR
   ============================================= */
function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let rafId  = null;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    dot.style.left  = mouseX + 'px';
    dot.style.top   = mouseY + 'px';
  });

  // Ring lags behind smoothly
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactives = document.querySelectorAll('a, button, input, textarea, .project-card, .tech-card, .cert-card, .contact-item, .stat-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });

  // Cleanup on unload
  window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
}

/* =============================================
   3. HERO PARTICLE CANVAS
   ============================================= */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [], rafId;
  const PARTICLE_COUNT = 90;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particle constructor
  class Particle {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size   = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.alpha  = Math.random() * 0.5 + 0.1;
      this.color  = Math.random() > 0.5 ? '82,196,255' : '123,95,245';
      this.pulse  = Math.random() * Math.PI * 2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulse += 0.02;
      this.alpha = (Math.sin(this.pulse) * 0.2 + 0.3);
      if (this.y < -10) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  // Spawn particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Connection lines between nearby particles
  function drawConnections() {
    const MAX_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(82,196,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  // Radial gradient overlay (center glow)
  function drawGlow() {
    const grad = ctx.createRadialGradient(W * 0.35, H * 0.5, 0, W * 0.35, H * 0.5, H * 0.7);
    grad.addColorStop(0, 'rgba(82,196,255,0.04)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawGlow();
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    rafId = requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('beforeunload', () => cancelAnimationFrame(rafId));
}

/* =============================================
   4. TYPING ANIMATION
   ============================================= */
function initTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'Full-Stack Applications',
    'AI / ML Systems',
    'React.js Interfaces',
    'Spring Boot APIs',
    'Computer Vision Pipelines',
    'Scalable Databases',
  ];

  let phraseIdx = 0, charIdx = 0, isDeleting = false;
  let typingTimeout;

  function type() {
    const current = phrases[phraseIdx];

    if (!isDeleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        // Pause before deleting
        isDeleting = true;
        typingTimeout = setTimeout(type, 2000);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx  = (phraseIdx + 1) % phrases.length;
        typingTimeout = setTimeout(type, 400);
        return;
      }
    }

    const speed = isDeleting ? 50 : 85;
    typingTimeout = setTimeout(type, speed);
  }

  typingTimeout = setTimeout(type, 800);
}

/* =============================================
   5. ANIMATED NAVBAR
   ============================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    // Scrolled style
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* =============================================
   6. HAMBURGER MOBILE MENU
   ============================================= */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* =============================================
   7. AOS INITIALIZATION
   ============================================= */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
      once: true,
      offset: 60,
    });
  }
}

/* =============================================
   8. 3D TILT EFFECT
   ============================================= */
function initTiltEffect() {
  const tiltEls = document.querySelectorAll('.tech-card, .project-card, .stat-card, .cert-card, .impact-card');

  tiltEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;

      const rotX = ((y - cy) / cy) * -6;  // degrees
      const rotY = ((x - cx) / cx) *  6;

      el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/* =============================================
   9. SKILL BARS (CSS custom property trick)
   ============================================= */
function initSkillBars() {
  const pills = document.querySelectorAll('.skill-pill');
  pills.forEach(pill => {
    const level = pill.getAttribute('data-level') || '0';
    pill.style.setProperty('--lv', level + '%');
  });
}

/* =============================================
   10. COUNTER ANIMATION
   ============================================= */
function initCounters() {
  const counters = document.querySelectorAll('.impact-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1800;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

/* =============================================
   11. PARALLAX (Hero section)
   ============================================= */
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  const heroStats   = document.querySelector('.hero-stats');
  if (!heroContent) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroContent.style.transform = `translateY(${y * 0.18}px)`;
          heroContent.style.opacity   = 1 - y / (window.innerHeight * 0.7);
          if (heroStats) heroStats.style.transform = `translateY(calc(-50% + ${y * 0.12}px))`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* =============================================
   12. EMAILJS CONTACT FORM
   ============================================= */
// function initContactForm() {
//   // Initialize EmailJS
//   if (typeof emailjs !== 'undefined') {
//     emailjs.init('Gq9JtQMLvkWCrkf2j');
//   }

//   const form     = document.getElementById('contactForm');
//   const sendBtn  = document.getElementById('sendBtn');
//   const status   = document.getElementById('formStatus');

//   if (!form) return;

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // Validate
//     if (!validateForm()) return;

//     // UI: loading state
//     const btnText    = sendBtn.querySelector('.btn-text');
//     const btnIcon    = sendBtn.querySelector('.btn-icon');
//     const btnLoading = sendBtn.querySelector('.btn-loading');

//     btnText.style.display    = 'none';
//     btnIcon.style.display    = 'none';
//     btnLoading.style.display = 'flex';
//     sendBtn.disabled = true;
//     status.textContent = '';
//     status.className = 'form-status';

//     // Build template params
//     const templateParams = {
//       from_name : document.getElementById('fromName').value.trim(),
//       from_email: document.getElementById('fromEmail').value.trim(),
//       message   : document.getElementById('message').value.trim(),
//       subject   : document.getElementById('subject').value.trim(),
//       to_name   : 'Achanta Bhanu Vamsi',
//       to_email  : 'achantabhanuvamsi@gmail.com',
//       reply_to  : document.getElementById('fromEmail').value.trim(),
//     };

//     try {
//       if (typeof emailjs !== 'undefined') {
//         await emailjs.send('service_ecg5w9w', 'template_uxmy8c9', templateParams);
//       } else {
//         // Demo fallback if EmailJS not loaded
//         await new Promise(r => setTimeout(r, 1200));
//       }

//       status.textContent = '✓ Message sent! I\'ll get back to you soon.';
//       status.className   = 'form-status success';
//       form.reset();

//     } catch (err) {
//       console.error('EmailJS error:', err);
//       status.textContent = '✕ Failed to send. Please email me directly at achantabhanuvamsi@gmail.com';
//       status.className   = 'form-status error';
//     } finally {
//       btnText.style.display    = 'inline';
//       btnIcon.style.display    = 'flex';
//       btnLoading.style.display = 'none';
//       sendBtn.disabled = false;
//     }
//   });
// }

// function validateForm() {
//   let valid = true;

//   const name    = document.getElementById('fromName');
//   const email   = document.getElementById('fromEmail');
//   const msg     = document.getElementById('message');
//   const nameErr = document.getElementById('nameError');
//   const emailErr = document.getElementById('emailError');
//   const msgErr  = document.getElementById('msgError');

//   // Reset errors
//   [nameErr, emailErr, msgErr].forEach(el => { if(el) el.textContent = ''; });
//   [name, email, msg].forEach(el => { if(el) el.style.borderColor = ''; });

//   if (!name.value.trim()) {
//     nameErr.textContent = 'Name is required.';
//     name.style.borderColor = 'var(--accent-3)';
//     valid = false;
//   }
//   if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
//     emailErr.textContent = 'Valid email is required.';
//     email.style.borderColor = 'var(--accent-3)';
//     valid = false;
//   }
//   if (!msg.value.trim() || msg.value.trim().length < 10) {
//     msgErr.textContent = 'Message must be at least 10 characters.';
//     msg.style.borderColor = 'var(--accent-3)';
//     valid = false;
//   }

//   return valid;
// }



/* =============================================
   12. EMAILJS CONTACT FORM
============================================= */

function initContactForm() {

  const form     = document.getElementById('contactForm');
  const sendBtn  = document.getElementById('sendBtn');
  const status   = document.getElementById('formStatus');

  if (!form) return;

  // Initialize EmailJS safely
  if (typeof emailjs !== 'undefined') {
    emailjs.init("Gq9JtQMLvkWCrkf2j");
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const btnText    = sendBtn.querySelector('.btn-text');
    const btnIcon    = sendBtn.querySelector('.btn-icon');
    const btnLoading = sendBtn.querySelector('.btn-loading');

    btnText.style.display    = 'none';
    btnIcon.style.display    = 'none';
    btnLoading.style.display = 'flex';

    sendBtn.disabled = true;
    status.textContent = '';
    status.className = 'form-status';

    const templateParams = {
      from_name  : document.getElementById('fromName').value.trim(),
      from_email : document.getElementById('fromEmail').value.trim(),
      subject    : document.getElementById('subject').value.trim(),
      message    : document.getElementById('message').value.trim(),
      to_name    : 'Achanta Bhanu Vamsi',
      reply_to   : document.getElementById('fromEmail').value.trim()
    };

    try {

      await emailjs.send(
        "service_9achglp",
        "template_uxmy8c9",
        templateParams,
        "Gq9JtQMLvkWCrkf2j"
      );

      status.textContent = "✓ Message sent successfully!";
      status.className   = "form-status success";

      form.reset();

    } catch (error) {

      console.error("EmailJS Error:", error);

      status.textContent = "✕ Failed to send message. Please try again.";
      status.className   = "form-status error";

    } finally {

      btnText.style.display    = 'inline';
      btnIcon.style.display    = 'flex';
      btnLoading.style.display = 'none';

      sendBtn.disabled = false;

    }

  });

}


function validateForm() {

  let valid = true;

  const name    = document.getElementById('fromName');
  const email   = document.getElementById('fromEmail');
  const msg     = document.getElementById('message');

  const nameErr  = document.getElementById('nameError');
  const emailErr = document.getElementById('emailError');
  const msgErr   = document.getElementById('msgError');

  // reset errors
  if(nameErr) nameErr.textContent = '';
  if(emailErr) emailErr.textContent = '';
  if(msgErr) msgErr.textContent = '';

  if(name) name.style.borderColor = '';
  if(email) email.style.borderColor = '';
  if(msg) msg.style.borderColor = '';

  if (!name.value.trim()) {
    nameErr.textContent = "Name is required";
    name.style.borderColor = "red";
    valid = false;
  }

  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailErr.textContent = "Enter a valid email";
    email.style.borderColor = "red";
    valid = false;
  }

  if (!msg.value.trim() || msg.value.trim().length < 10) {
    msgErr.textContent = "Message must be at least 10 characters";
    msg.style.borderColor = "red";
    valid = false;
  }

  return valid;
}



/* =============================================
   13. BACK TO TOP
   ============================================= */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================
   14. SMOOTH SCROLL for nav links
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* =============================================
   15. SCROLL-REVEAL for cards (intersection observer fallback)
   ============================================= */
function initScrollReveal() {
  const cards = document.querySelectorAll('.project-card, .skill-category, .cert-card, .impact-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

/* =============================================
   16. GLOW ON MOUSE MOVE (global)
   ============================================= */
document.addEventListener('mousemove', (e) => {
  // Ambient glow follows cursor across sections
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mx', x + 'vw');
  document.documentElement.style.setProperty('--my', y + 'vh');
});
