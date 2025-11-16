// ====================================
// Initialize AOS (Animate On Scroll)
// ====================================

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ====================================
// Mobile Menu Toggle
// ====================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// ====================================
// Sticky Header
// ====================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '20px 0';
    }

    lastScroll = currentScroll;
});

// ====================================
// Smooth Scroll for Anchor Links
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ====================================
// Scroll to Contacts Function
// ====================================

function scrollToContacts() {
    const contacts = document.getElementById('contacts');
    if (contacts) {
        const offsetTop = contacts.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ====================================
// Animated Counter for Stats
// ====================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for counters
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ====================================
// Portfolio Images
// ====================================

// Portfolio images - add or modify filenames as needed
// Simply add new entries to this array to include more images
const portfolioImages = [
    'some images/1.jpg',
    'some images/2.jpg',
    'some images/3.jpg',
    'some images/4.jpg',
    'some images/5.jpg',
    'some images/6.jpg',
    'some images/7.jpg',
    'some images/8.jpg',
    'some images/9.jpg',
    'some images/10.jpg',
    'some images/11.jpg',
    'some images/12.jpg',
    'some images/13.jpg',
    'some images/14.jpg',
    'some images/15.jpg',
    'some images/16.jpg',
    'some images/17.jpg',
    'some images/18.jpg',
    'some images/19.jpg',
    'some images/20.jpg',
    'some images/21.jpg',
    'some images/22.jpg',
    'some images/23.jpg',
    'some images/24.jpg',
    'some images/25.jpg',
    'some images/26.jpg',
    'some images/27.jpg',
    'some images/28.jpg',
    'some images/29.jpg',
    'some images/30.jpg',
    'some images/31.jpg',
    'some images/32.jpg',
    'some images/33.jpg',
    'some images/34.jpg',
    'some images/35.jpg',
    'some images/36.jpg',
    'some images/37.jpg',
    'some images/38.jpg',
    'some images/39.jpg',
    'some images/40.jpg',
    'some images/41.jpg',
    'some images/42.jpg',
    'some images/43.jpg',
    'some images/44.jpg',
    'some images/45.jpg',
    'some images/46.jpg',
    'some images/47.jpg',
    'some images/48.jpg',
    'some images/49.jpg',
    'some images/50.jpg',
    'some images/51.jpg',
    'some images/52.jpg',
    'some images/53.jpg',
    'some images/54.jpg',
    'some images/55.jpg',
    'some images/56.jpg',
    'some images/57.jpg',
    'some images/58.jpg',
    'some images/59.jpg'
];

// Initialize Swiper for Portfolio Slider
const portfolioSwiper = new Swiper('.portfolioSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Add images to slider
const swiperWrapper = document.querySelector('.portfolioSwiper .swiper-wrapper');
if (swiperWrapper) {
    // Use first 12 images for the slider
    portfolioImages.slice(0, 12).forEach((imagePath, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${imagePath}" alt="Проект ${index + 1}" loading="lazy">`;
        swiperWrapper.appendChild(slide);
    });
}

// Add images to portfolio grid
const portfolioGrid = document.querySelector('.portfolio-grid');
if (portfolioGrid) {
    // Use remaining images for the grid (images 13-59)
    portfolioImages.slice(12).forEach((imagePath, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-delay', (index % 6) * 100);
        item.innerHTML = `<img src="${imagePath}" alt="Проект ${index + 13}" loading="lazy">`;

        // Add click event to open image in new tab
        item.addEventListener('click', () => {
            window.open(imagePath, '_blank');
        });

        portfolioGrid.appendChild(item);
    });
}

// Reinitialize AOS after adding dynamic content
setTimeout(() => {
    AOS.refresh();
}, 100);

// ====================================
// Scroll to Top Button
// ====================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// Parallax Effect for Hero Section
// ====================================

const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    if (window.pageYOffset < window.innerHeight) {
        const scrolled = window.pageYOffset;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// ====================================
// Lazy Loading Images Optimization
// ====================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ====================================
// Add Active State to Navigation
// ====================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu nav a');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ====================================
// Prevent Empty Hash Links
// ====================================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ====================================
// Console Welcome Message
// ====================================

console.log('%cВК-Мебель', 'font-size: 24px; font-weight: bold; color: #e67e22;');
console.log('%cПроизводство корпусной мебели в Петрозаводске', 'font-size: 14px; color: #2c3e50;');
console.log('%c28 лет опыта | Собственное производство', 'font-size: 12px; color: #7f8c8d;');
console.log('%cТелефон: +7 921 726 0679', 'font-size: 12px; color: #27ae60;');

// ====================================
// Performance Optimization
// ====================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedSetActiveNav = debounce(setActiveNav, 100);
window.removeEventListener('scroll', setActiveNav);
window.addEventListener('scroll', debouncedSetActiveNav);

// ====================================
// Dynamic Year in Footer
// ====================================

const currentYear = new Date().getFullYear();
const footerCopyright = document.querySelector('.footer-bottom p');
if (footerCopyright && currentYear > 2025) {
    footerCopyright.textContent = footerCopyright.textContent.replace('2025', currentYear);
}

// ====================================
// Email Protection (if needed in future)
// ====================================

// Simple email obfuscation to prevent spam bots
function decodeEmail(encoded) {
    const email = atob(encoded);
    return email;
}

// ====================================
// Add Hover Effect to Cards
// ====================================

const cards = document.querySelectorAll('.client-card, .advantage-card, .stat-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ====================================
// Initialize Everything on Load
// ====================================

window.addEventListener('load', () => {
    console.log('✅ Сайт успешно загружен!');

    // Trigger AOS refresh
    AOS.refresh();

    // Set initial active nav
    setActiveNav();
});

// ====================================
// Service Worker (Optional - for PWA)
// ====================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered', reg))
    //     .catch(err => console.log('Service Worker registration failed', err));
}

// ====================================
// Add Visual Feedback for Touch Devices
// ====================================

if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');

    // Add touch-friendly hover effects
    const touchCards = document.querySelectorAll('.client-card, .advantage-card, .portfolio-item');
    touchCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// ====================================
// Track CTA Button Clicks (for analytics)
// ====================================

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-messenger, .btn-whatsapp, .btn-telegram');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent || this.title;
        console.log(`CTA clicked: ${buttonText}`);

        // You can add Google Analytics or Yandex Metrika tracking here
        // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
        // Example: ym(XXXXXX, 'reachGoal', 'cta_click');
    });
});

// ====================================
// Phone Number Click Tracking
// ====================================

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
        // Add analytics tracking here
    });
});

// ====================================
// Form Submission Handler (if forms are added)
// ====================================

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        console.log('Form submitted');
        // Add form validation or analytics here
    });
});

// ====================================
// Add Loading Animation
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ====================================
// Easter Egg - Konami Code
// ====================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        console.log('%c🎉 Секретный код активирован! 🎉', 'font-size: 20px; color: #e67e22; font-weight: bold;');
        console.log('%cВы нашли пасхалку! Свяжитесь с нами со словом "KONAMI" для специального предложения!', 'font-size: 14px; color: #27ae60;');

        // Add confetti or special effect here
        document.body.style.animation = 'rainbow 2s infinite';
    }
});

// ====================================
// Browser Support Warning
// ====================================

function checkBrowserSupport() {
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    const isOldEdge = !isIE && !!window.StyleMedia;

    if (isIE || isOldEdge) {
        console.warn('⚠️ Вы используете устаревший браузер. Некоторые функции могут работать некорректно.');
        console.warn('Рекомендуем использовать современные браузеры: Chrome, Firefox, Safari, или новый Edge.');
    }
}

checkBrowserSupport();

// ====================================
// Prevent Right Click on Images (Optional)
// ====================================

// Uncomment to prevent right-click on portfolio images
// document.querySelectorAll('.portfolio-item img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => {
//         e.preventDefault();
//         return false;
//     });
// });

// ====================================
// Add Print Styles Handler
// ====================================

window.addEventListener('beforeprint', () => {
    console.log('Страница отправлена на печать');
});

// ====================================
// Monitor Performance
// ====================================

if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Время загрузки страницы: ${(pageLoadTime / 1000).toFixed(2)} секунд`);
        }, 0);
    });
}
