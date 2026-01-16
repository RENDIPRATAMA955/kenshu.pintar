// ==========================================
// KENSHU.PINTAR - SOLANA-INSPIRED JAVASCRIPT
// ==========================================

function initUI() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks) navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (!header) return;
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
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
    // TILT 3D EFFECT - Portfolio Cards & About Photo
    // ==========================================
    document.querySelectorAll('.portfolio-item, .visual-element').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });

    // ==========================================
    // MAGNETIC BUTTON EFFECT
    // ==========================================
    document.querySelectorAll('.cta-button, .submit-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
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
    // ACTIVE NAV LINK HIGHLIGHT
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
    // PRELOADER
    // ==========================================
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 500);
        }, 800);
    });

    // ==========================================
    // PARTICLE BACKGROUND
    // ==========================================
    createParticles();
}

// ==========================================
// PARTICLE SYSTEM
// ==========================================
function createParticles() {
    const particleContainer = document.querySelector('.floating-shapes');
    if (!particleContainer) return;

    // Add particles (limit to avoid performance issues)
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const colors = ['#9945FF', '#14F195', '#FFFFFF', 'rgba(153, 69, 255, 0.5)'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            opacity: ${Math.random() * 0.4 + 0.1};
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

    document.querySelector('.modal-close')?.addEventListener('click', closeModal);

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
    initTypingAnimation();
    initLanguageSwitcher();
});

// ==========================================
// TYPING TEXT ANIMATION
// ==========================================
function initTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;

    const texts = ['Kenshu Pintar', 'JAKENSHOP', 'Solusi Digital'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
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
    typeEffect();
}

// ==========================================
// LANGUAGE SWITCHER
// ==========================================
const translations = {
    id: {
        // Navigation
        home: 'Beranda',
        about: 'Tentang',
        portfolio: 'Produk',
        contact: 'Kontak',
        // Hero
        welcomeTo: 'Welcome to',
        heroDesc: 'Solusi digital terpercaya untuk kebutuhan Anda. Kami menyediakan produk dan layanan berkualitas tinggi dengan pelayanan profesional.',
        ctaButton: 'Lihat Produk',
        // About
        aboutTitle: 'Tentang Saya',
        aboutGreeting: 'Halo, Saya',
        aboutName: 'Rendi Pratama',
        aboutDesc1: 'Perkenalkan, nama saya Rendi Pratama, pengelola situs ini. Saya berkomitmen memberikan produk dan layanan digital dengan kualitas terbaik.',
        aboutDesc2: 'Saya fokus pada kejelasan informasi dan pelayanan yang dapat dipercaya, agar setiap pelanggan merasa aman dan nyaman dalam bertransaksi.',
        aboutRole: 'Pengelola JAken.com',
        // Products
        productsTitle: 'Produk Kami',
        product1Title: 'Kartu Internet',
        product1Desc: 'Berbagai kartu internet Jepang, tanpa kontrak',
        product2Title: 'Tabako',
        product2Desc: 'Berbagai merek rok Jepang, harga kompetitif',
        product3Title: 'Kelas Trading',
        product3Desc: 'Strategi trading & investasi lengkap dan realistis',
        // Contact
        contactTitle: 'Hubungi Saya',
        locationLabel: 'Lokasi',
        locationValue: 'Sakabe, Makinohara, Shizuoka Japan',
        emailLabel: 'Email',
        phoneLabel: 'Telepon',
        namePlaceholder: 'Nama Lengkap',
        messagePlaceholder: 'Pesan Anda',
        submitButton: 'Kirim Pesan',
        locationTitle: 'Lokasi Kami'
    },
    jp: {
        // Navigation
        home: 'ホーム',
        about: '概要',
        portfolio: '製品',
        contact: 'お問い合わせ',
        // Hero
        welcomeTo: 'ようこそ',
        heroDesc: '信頼できるデジタルソリューション。高品質な製品とプロフェッショナルなサービス为您提供します。',
        ctaButton: '製品を見る',
        // About
        aboutTitle: '概要',
        aboutGreeting: 'こんにちは、',
        aboutName: 'レンディプラタマです',
        aboutDesc1: 'ご紹介します。私はレンディプラタマです。このサイトの運営者です。最高の品質の製品とデジタルサービスを提供することをお約束します。',
        aboutDesc2: '私は情報の明確さと信頼できるサービスに注意を払い、すべての顧客が安全に快適に取引できるようにします。',
        aboutRole: 'JAken.com管理者',
        // Products
        productsTitle: '製品',
        product1Title: 'インターネットカード',
        product1Desc: '様々な日本のインターネットカード、契約なし',
        product2Title: 'タバコ',
        product2Desc: '様々な日本のタバコ、お得な価格',
        product3Title: 'トレーディングクラス',
        product3Desc: '完全で現実的なトレーディング・投資戦略',
        // Contact
        contactTitle: 'お問い合わせ',
        locationLabel: '場所',
        locationValue: '静岡県牧之原市坂部',
        emailLabel: 'メール',
        phoneLabel: '電話',
        namePlaceholder: 'お名前',
        messagePlaceholder: 'メッセージ',
        submitButton: '送信',
        locationTitle: '私たちの場所'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        portfolio: 'Products',
        contact: 'Contact',
        // Hero
        welcomeTo: 'Welcome to',
        heroDesc: 'Your trusted digital solution. We provide high-quality products and services with professional care.',
        ctaButton: 'View Products',
        // About
        aboutTitle: 'About Me',
        aboutGreeting: 'Hello, I am',
        aboutName: 'Rendi Pratama',
        aboutDesc1: 'Let me introduce myself. My name is Rendi Pratama, the manager of this site. I am committed to providing the best quality digital products and services.',
        aboutDesc2: 'I focus on clear information and trustworthy service, so every customer feels safe and comfortable in transactions.',
        aboutRole: 'Manager of JAken.com',
        // Products
        productsTitle: 'Our Products',
        product1Title: 'Internet Card',
        product1Desc: 'Various Japanese internet cards, no contract required',
        product2Title: 'Tobacco',
        product2Desc: 'Various Japanese tobacco products, competitive prices',
        product3Title: 'Trading Class',
        product3Desc: 'Complete and realistic trading & investment strategies',
        // Contact
        contactTitle: 'Contact Me',
        locationLabel: 'Location',
        locationValue: 'Sakabe, Makinohara, Shizuoka Japan',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        namePlaceholder: 'Full Name',
        messagePlaceholder: 'Your Message',
        submitButton: 'Send Message',
        locationTitle: 'Our Location'
    }
};

function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = 'id';

    // Load saved language
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateLanguage(savedLang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            updateLanguage(lang);

            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Set initial active button
    langBtns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-text-id attribute
    document.querySelectorAll('[data-text-id]').forEach(element => {
        const textId = element.dataset.textId;
        if (t[textId]) {
            element.textContent = t[textId];
        }
    });

    // Update hero title (keep the space before Kenshu Pintar in JP)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = lang === 'jp' ? ' Kenshu Pintar' : 'Kenshu Pintar';
    }

    // Update hero description
    const heroDesc = document.querySelector('.fade-in');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    // Update CTA button
    const ctaBtn = document.querySelector('.cta-button');
    if (ctaBtn) {
        ctaBtn.innerHTML = `${t.ctaButton} <i class="fas fa-arrow-right"></i>`;
    }

    // Update form elements
    const nameInput = document.querySelector('input[placeholder]');
    if (nameInput && nameInput.placeholder === 'Nama Lengkap') {
        nameInput.placeholder = t.namePlaceholder;
    }

    const messageInput = document.querySelector('textarea');
    if (messageInput) messageInput.placeholder = t.messagePlaceholder;

    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.innerHTML = `${t.submitButton} <i class="fas fa-paper-plane"></i>`;
    }

    // Update map title
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe) mapIframe.title = t.locationTitle;
}

