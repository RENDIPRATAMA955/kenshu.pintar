/* Small partial loader: cari elemen dengan atribut data-partial dan masukkan konten */
async function loadPartials() {
    const partials = document.querySelectorAll('[data-partial]');
    const promises = Array.from(partials).map(async (el) => {
        const path = el.getAttribute('data-partial');
        try {
            const res = await fetch(path);
            if (!res.ok) throw new Error('Failed to load ' + path);
            const html = await res.text();
            el.innerHTML = html;
        } catch (err) {
            console.error(err);
            el.innerHTML = '<!-- Gagal memuat ' + path + ' -->';
        }
    });
    await Promise.all(promises);
}

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

        // Close mobile menu when clicking a link
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

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn ? submitBtn.innerHTML : '';
            if (!submitBtn) return;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
                submitBtn.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 2000);
        });
    }

    // Portfolio hover
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => { item.style.transform = 'translateY(-10px)'; item.style.transition = 'transform 0.5s ease'; });
        item.addEventListener('mouseleave', () => { item.style.transform = 'translateY(0)'; });
    });

    // Scroll animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
    }, observerOptions);

    document.querySelectorAll('.about-text, .about-visual, .portfolio-item, .contact-info, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadPartials();
    initUI();
});
