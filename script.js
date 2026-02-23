// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a:not(.lang-btn)');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Fade-In Animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// Language Modal Logic
const langBtn = document.getElementById('lang-btn');
const langModal = document.getElementById('lang-modal');
const closeLangModal = document.getElementById('close-lang-modal');

function openModal() {
    langModal.style.display = 'flex';
    setTimeout(() => { langModal.classList.add('show'); }, 10);
}

function closeModal() {
    langModal.classList.remove('show');
    setTimeout(() => { langModal.style.display = 'none'; }, 300);
}

langBtn.addEventListener('click', openModal);
closeLangModal.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === langModal) { closeModal(); }
});

// --- Language Preference Memory ---
// Save language choice when a user manually clicks a language in the modal
const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
    option.addEventListener('click', function() {
        const href = this.getAttribute('href');
        
        // Save the corresponding language code to localStorage based on the link clicked
        if (href.includes('-de.html')) {
            localStorage.setItem('userLangPref', 'de');
        } else if (href.includes('-nl.html')) {
            localStorage.setItem('userLangPref', 'nl');
        } else if (href.includes('-tr.html')) {
            localStorage.setItem('userLangPref', 'tr');
        } else {
            localStorage.setItem('userLangPref', 'en'); // English default
        }
    });
});