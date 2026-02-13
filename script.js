/* ============================================
   💕 Valentine's Day Website - Script
   Love Story: Navateja & Sravani
   ============================================ */

// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
        setTimeout(() => preloader.style.display = 'none', 800);
    }, 2000);
});

// ===== LOVE DATE & COUNTER =====
const LOVE_START = new Date('2022-12-09T00:00:00');

function updateLoveCounter() {
    const now = new Date();
    let diff = now - LOVE_START;

    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    diff -= years * 365.25 * 24 * 60 * 60 * 1000;

    const months = Math.floor(diff / (30.44 * 24 * 60 * 60 * 1000));
    diff -= months * 30.44 * 24 * 60 * 60 * 1000;

    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    diff -= days * 24 * 60 * 60 * 1000;

    const hours = Math.floor(diff / (60 * 60 * 1000));
    diff -= hours * 60 * 60 * 1000;

    const minutes = Math.floor(diff / (60 * 1000));
    diff -= minutes * 60 * 1000;

    const seconds = Math.floor(diff / 1000);

    // Hero counter text
    const heroCounter = document.getElementById('love-counter');
    if (heroCounter) {
        const totalDays = Math.floor((now - LOVE_START) / (24 * 60 * 60 * 1000));
        heroCounter.textContent = `💕 ${totalDays} days of loving you... and counting forever`;
    }

    // Detailed counter section
    const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    setEl('counter-years', years);
    setEl('counter-months', months);
    setEl('counter-days', days);
    setEl('counter-hours', hours);
    setEl('counter-minutes', minutes);
    setEl('counter-seconds', seconds);
}

updateLoveCounter();
setInterval(updateLoveCounter, 1000);

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;

    const hearts = ['❤️', '💕', '💖', '💗', '💝', '🤍', '✝️', '🌹', '💐'];

    function spawnHeart() {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 12) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 8) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 20000);
    }

    // Spawn initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(spawnHeart, Math.random() * 3000);
    }

    // Keep spawning
    setInterval(spawnHeart, 1500);
}

createFloatingHearts();

// ===== ROSE PETALS ON CLICK =====
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement('div');
        petal.classList.add('rose-petal');
        petal.style.left = e.clientX + 'px';
        petal.style.top = e.clientY + 'px';
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        petal.style.background = ['#e74c6f', '#ff6b8a', '#f5a3b8', '#d4a373'][Math.floor(Math.random() * 4)];
        document.getElementById('rose-petals').appendChild(petal);

        setTimeout(() => petal.remove(), 5000);
    }
});

// ===== HERO PARTICLES =====
function createHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

createHeroParticles();

// ===== NAVBAR SCROLL EFFECTS =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNavLink();
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// ===== PHOTO GALLERY LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentGalleryIndex = 0;

const galleryData = [];

galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const caption = item.getAttribute('data-caption') || '';
    galleryData.push({ src: img.src, caption: caption });

    item.addEventListener('click', () => {
        currentGalleryIndex = index;
        openLightbox(index);
    });
});

function openLightbox(index) {
    lightboxImg.src = galleryData[index].src;
    lightboxCaption.textContent = galleryData[index].caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(currentGalleryIndex);
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    openLightbox(currentGalleryIndex);
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(currentGalleryIndex);
    }
    if (e.key === 'ArrowRight') {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
        openLightbox(currentGalleryIndex);
    }
});

// ===== TYPING EFFECT FOR LETTER (on scroll) =====
let letterAnimated = false;
const letterSection = document.getElementById('love-letter');

if (letterSection) {
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !letterAnimated) {
                letterAnimated = true;
                animateLetterText();
            }
        });
    }, { threshold: 0.2 });

    letterObserver.observe(letterSection);
}

function animateLetterText() {
    const paragraphs = document.querySelectorAll('.letter-body p');
    paragraphs.forEach((p, i) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 200 * i);
    });
}

// ===== MUSIC PLAYER =====
const musicBtn = document.getElementById('music-toggle');
let audioContext = null;
let isPlaying = false;

// Create a simple romantic melody using Web Audio API
function createRomanticMelody() {
    if (audioContext) {
        if (isPlaying) {
            audioContext.close();
            audioContext = null;
            isPlaying = false;
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        }
        return;
    }

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    isPlaying = true;
    musicBtn.classList.add('playing');
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';

    // Romantic chord progression
    const chords = [
        [261.63, 329.63, 392.00], // C major
        [293.66, 369.99, 440.00], // D minor (approx)
        [246.94, 311.13, 369.99], // B diminished (approx)
        [261.63, 329.63, 392.00], // C major
        [220.00, 277.18, 329.63], // A minor
        [246.94, 311.13, 369.99], // G major (approx)
        [261.63, 329.63, 392.00], // C major
    ];

    let chordIndex = 0;

    function playChord() {
        if (!audioContext || audioContext.state === 'closed') return;

        const now = audioContext.currentTime;
        const chord = chords[chordIndex % chords.length];

        chord.forEach((freq, i) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(freq, now);

            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.06, now + 0.3);
            gainNode.gain.linearRampToValueAtTime(0.04, now + 1.5);
            gainNode.gain.linearRampToValueAtTime(0, now + 2.8);

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start(now + i * 0.1);
            oscillator.stop(now + 3);
        });

        chordIndex++;
        setTimeout(playChord, 3000);
    }

    playChord();
}

musicBtn.addEventListener('click', createRomanticMelody);

// ===== SMOOTH REVEAL FOR COUNTER NUMBERS =====
function animateCounterNumbers() {
    const numbers = document.querySelectorAll('.counter-number');
    numbers.forEach(num => {
        num.style.transition = 'transform 0.3s ease';
    });
}

animateCounterNumbers();

// ===== CUSTOM CURSOR TRAIL (hearts) =====
let lastMouseX = 0, lastMouseY = 0;
let mouseTrailThrottle = 0;

document.addEventListener('mousemove', (e) => {
    mouseTrailThrottle++;
    if (mouseTrailThrottle % 8 !== 0) return;

    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 30) {
        const trail = document.createElement('span');
        trail.textContent = '❤';
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            font-size: 12px;
            color: #e74c6f;
            opacity: 0.6;
            z-index: 9999;
            transition: all 1s ease;
        `;
        document.body.appendChild(trail);

        requestAnimationFrame(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'translateY(-30px) scale(0.3)';
        });

        setTimeout(() => trail.remove(), 1000);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    }
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
            heroContent.style.opacity = 1 - scrolled / 800;
        }
    }
});

// ===== SPECIAL VALENTINE'S SURPRISE (Auto-trigger confetti on page load) =====
setTimeout(() => {
    launchConfetti();
}, 3000);

function launchConfetti() {
    const colors = ['#e74c6f', '#ff6b8a', '#f5a3b8', '#d4a373', '#f0d9b5', '#ffffff'];
    const shapes = ['❤️', '💕', '✨', '🌹', '💖', '✝️'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 14}px;
                pointer-events: none;
                z-index: 99998;
                animation: confettiFall ${Math.random() * 3 + 3}s linear forwards;
            `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 6000);
        }, i * 80);
    }
}

// Add confetti animation dynamically
const confStyle = document.createElement('style');
confStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confStyle);

// ===== CONSOLE LOVE MESSAGE =====
console.log('%c💕 Happy Valentine\'s Day, Sravani! 💕', 'color: #e74c6f; font-size: 24px; font-weight: bold;');
console.log('%c✝️ "Love is patient, love is kind" — 1 Corinthians 13:4', 'color: #d4a373; font-size: 14px;');
console.log('%cMade with ❤️ by Navateja for his beautiful Sravani', 'color: #ff6b8a; font-size: 12px;');
