gsap.registerPlugin(ScrollTrigger);

// --- HERO FADE-INS ---
gsap.from(".fade-in", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// --- MONOLITH 3D TILT WITH REFLECTION ---
const monolith = document.getElementById('monolith');
const reflection = document.querySelector('.monolith-reflection');

if (monolith) {
    monolith.addEventListener('mousemove', e => {
        const rect = monolith.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        const reflectionX = ((x / rect.width) * 100) - 50;
        const reflectionY = ((y / rect.height) * 100) - 50;
        
        monolith.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        reflection.style.transform = `translate3d(${reflectionX}px, ${reflectionY}px, 50px)`;
        monolith.style.transition = 'transform 0.05s ease-out';
    });
    
    monolith.addEventListener('mouseleave', () => {
        monolith.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        reflection.style.transform = `translate3d(0px, 0px, 50px)`;
        monolith.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
}

// --- MONOLITH PLAYLIST INTERACTION ---
const playlistAddBtn = document.getElementById('playlist-add-btn');
const toastMsg = document.getElementById('toast-msg');

if (playlistAddBtn && toastMsg) {
    playlistAddBtn.addEventListener('click', () => {
        toastMsg.classList.add('show');
        setTimeout(() => {
            toastMsg.classList.remove('show');
        }, 2000);
    });
}

// --- 3D TILT EFFECT ---
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease-out';
    });
});

// --- INTERACTIVE TOUR WALKTHROUGH ---
const tourSteps = document.querySelectorAll('.tour-step');
const tourImages = document.querySelectorAll('.tour-img');
const phoneFrame = document.querySelector('.phone-frame');

tourSteps.forEach(step => {
    step.addEventListener('click', () => {
        // Toggle Active Step
        tourSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        // Toggle Active Image
        const stepNum = step.dataset.step;
        tourImages.forEach(img => img.classList.remove('active'));
        const activeImg = document.getElementById(`tour-img-${stepNum}`);
        if (activeImg) activeImg.classList.add('active');
    });
});

if (phoneFrame) {
    phoneFrame.addEventListener('mousemove', e => {
        const rect = phoneFrame.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        phoneFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        phoneFrame.style.transition = 'transform 0.05s ease-out';
    });
    
    phoneFrame.addEventListener('mouseleave', () => {
        phoneFrame.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        phoneFrame.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
}

// --- AUDIO QUALITY WIDGET SIMULATOR (BENTO) ---
const freqButtons = document.querySelectorAll('.freq-btn');
const freqBars = document.querySelectorAll('.freq-bar');

const waveHeights = {
    320: [80, 95, 60, 90, 40],
    160: [50, 65, 45, 60, 30],
    96: [20, 30, 25, 35, 15]
};

freqButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        freqButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const rate = e.target.dataset.rate;
        const heights = waveHeights[rate];
        
        freqBars.forEach((bar, idx) => {
            bar.style.height = heights[idx] + '%';
        });
    });
});

// --- FAQ ACCORDION ---
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// --- TERMS & PRIVACY MODALS ---
const termsLink = document.getElementById('terms-link');
const termsModal = document.getElementById('terms-modal');
const termsClose = document.getElementById('terms-close');

const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const privacyClose = document.getElementById('privacy-close');

const setupModal = (link, modal, closeBtn) => {
    if (link && modal && closeBtn) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        const closeModal = () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        };
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
};

setupModal(termsLink, termsModal, termsClose);
setupModal(privacyLink, privacyModal, privacyClose);


// --- GSAP SECTIONS TRIGGER ---
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});
