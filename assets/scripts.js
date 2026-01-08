// ==========================================
// JAKENSHOP - Complete Effects Package
// ==========================================

function initUI() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks) navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (!header) return;
        if (window.scrollY > 50) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    });

    // Contact form submission - WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, textarea');
            let message = '';
            let name = '';

            inputs.forEach(input => {
                if (input.tagName.toLowerCase() === 'input') {
                    name = input.value;
                } else if (input.tagName.toLowerCase() === 'textarea') {
                    message = input.value;
                }
            });

            const fullMessage = `Halo, saya ${name}. ${message}`;
            const encodedMessage = encodeURIComponent(fullMessage);
            const whatsappURL = `https://wa.me/6281990637492?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');
            contactForm.reset();
        });
    }

    // ==========================================
    // 1. TYPING TEXT EFFECT - Hero Section
    // ==========================================
    const typingElement = document.querySelector('.hero h2');
    if (typingElement) {
        const texts = ['online shop', 'JAKENSHOP', 'One for All'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeEffect() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Start typing effect
        typingElement.style.opacity = '1';
        typeEffect();
    }

    // ==========================================
    // 2. TILT 3D EFFECT - Portfolio Cards & About Photo
    // ==========================================
    document.querySelectorAll('.portfolio-item, .visual-element').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });

    // ==========================================
    // 4. COUNTING NUMBERS ANIMATION
    // ==========================================
    const counterElements = document.querySelectorAll('.skill, .contact-item h3');

    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    // ==========================================
    // 5. PARALLAX SCROLLING EFFECT - DIHAPUS
    // ==========================================
    /* window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Parallax for floating shapes
        document.querySelectorAll('.shape').forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }

        // Scroll progress indicator
        updateScrollProgress();
    }); */

    // ==========================================
    // 6. SCROLL PROGRESS INDICATOR - DIHAPUS
    // ==========================================
    /* const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    } */

    // ==========================================
    // 7. ENHANCED SCROLL REVEAL ANIMATIONS - DIHAPUS
    // ==========================================
    /* const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Stagger animation for grid items
                const siblings = entry.target.parentElement.querySelectorAll('.revealed');
                entry.target.style.transitionDelay = `${siblings.length * 0.1}s`;
            }
        });
    }, observerOptions);

    // Add reveal class and initial styles
    document.querySelectorAll('.about-text, .about-visual, .portfolio-item, .contact-info, .contact-form, .section-title').forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    }); */

    // ==========================================
    // 8. MAGNETIC BUTTON EFFECT
    // ==========================================
    document.querySelectorAll('.cta-button, .submit-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ==========================================
    // 9. PORTFOLIO & ABOUT PHOTO HOVER EFFECTS
    // ==========================================
    document.querySelectorAll('.portfolio-item, .visual-element').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 20px 50px rgba(108, 99, 255, 0.4)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });

    // ==========================================
    // 10. SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // 11. LAZY LOADING FOR IMAGES
    // ==========================================
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // ==========================================
    // 12. ACTIVE NAV LINK HIGHLIGHT
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ==========================================
    // 13. PREloader
    // ==========================================
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    });

    // ==========================================
    // 14. PARTICLE BACKGROUND (Enhanced)
    // ==========================================
    createParticles();

    // ==========================================
    // 15. TEXT GLOW EFFECT ON SCROLL - DIHAPUS
    // ==========================================
    /* window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroTitle = document.querySelector('.hero h1');

        if (heroTitle && scrolled < 500) {
            const glowIntensity = 1 - (scrolled / 500);
            heroTitle.style.textShadow = `0 0 ${30 * glowIntensity}px rgba(108, 99, 255, ${0.5 * glowIntensity})`;
        }
    }); */

    // ==========================================
    // 16. PORTFOLIO & ABOUT PHOTO HOVER EFFECTS
    // ==========================================
}

// ==========================================
// PARTICLE SYSTEM
// ==========================================
function createParticles() {
    const particleContainer = document.querySelector('.floating-shapes') || document.body;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random properties
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const color = ['#6C63FF', '#FF6584', '#36D1DC', '#ffffff'][Math.floor(Math.random() * 4)];

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        particleContainer.appendChild(particle);
    }
}

// ==========================================
// MODAL POPUP SYSTEM
// ==========================================
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.querySelector('.modal-close').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    return modal;
}

function openModal(content) {
    let modal = document.querySelector('.modal-overlay');
    if (!modal) modal = createModal();

    modal.querySelector('.modal-body').innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make modal functions globally accessible
window.openModal = openModal;
window.closeModal = closeModal;

// ==========================================
// Initialize on DOM Ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initUI();
});

