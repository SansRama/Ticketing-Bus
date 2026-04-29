// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Toggle trip type (Pergi / Pulang-Pergi)
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all toggle buttons
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Form submission
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const dari = searchForm.querySelector('select:nth-of-type(1)').value;
    const ke = searchForm.querySelector('select:nth-of-type(2)').value;
    const tanggal = searchForm.querySelector('input[type="date"]').value;
    
    // Basic validation
    if (!dari || !ke || !tanggal) {
        alert('Mohon lengkapi semua field yang diperlukan');
        return;
    }
    
    if (dari === ke) {
        alert('Kota asal dan tujuan tidak boleh sama');
        return;
    }
    
    // Simulate search
    alert(`Mencari tiket dari ${dari} ke ${ke} pada tanggal ${tanggal}...`);
});

// Scroll animation for fade-in elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// CTA button scroll to search form
const ctaButton = document.querySelector('.btn-cta');
const searchSection = document.querySelector('.search-section');

ctaButton.addEventListener('click', () => {
    const offsetTop = searchSection.offsetTop - 70;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Route card buttons
const routeButtons = document.querySelectorAll('.btn-route');

routeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const routeName = button.parentElement.querySelector('h3').textContent;
        alert(`Anda akan diarahkan ke halaman pemesanan untuk rute ${routeName}`);
    });
});

// Fleet detail buttons
const fleetButtons = document.querySelectorAll('.btn-fleet');

fleetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const fleetClass = button.parentElement.querySelector('h3').textContent;
        alert(`Menampilkan detail lengkap untuk ${fleetClass}`);
    });
});

// Download app buttons
const downloadButtons = document.querySelectorAll('.btn-download');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const platform = button.querySelector('strong').textContent;
        alert(`Mengarahkan ke ${platform}...`);
    });
});

// Set minimum date for date picker (today)
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console welcome message
console.log('%c🚌 Juragan99Trans', 'color: #D32F2F; font-size: 24px; font-weight: bold;');
console.log('%cSelamat datang di website Juragan99Trans!', 'color: #757575; font-size: 14px;');
console.log('%cPerjalanan Anda adalah prioritas kami.', 'color: #757575; font-size: 14px;');