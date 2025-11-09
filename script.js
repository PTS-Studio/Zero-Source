// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle?.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Navigation Cards - Redirect to documentation page
document.querySelectorAll('.doc-card').forEach(card => {
    card.addEventListener('click', () => {
        const docType = card.getAttribute('data-doc');
        // Store the selected doc type for later use
        localStorage.setItem('selectedDoc', docType);
        window.location.href = 'doc-page.html';
    });
});

// Sidebar Toggle Sections
document.querySelectorAll('.nav-section-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
    });
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');

mobileMenuBtn?.addEventListener('click', () => {
    sidebar?.classList.add('active');
});

sidebarClose?.addEventListener('click', () => {
    sidebar?.classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebar?.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        !mobileMenuBtn?.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Table of Contents - Smooth Scroll and Active State
const tocLinks = document.querySelectorAll('.toc-link');
const sections = document.querySelectorAll('h1[id], h2[id], h3[id]');

// Smooth scroll
tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active state on scroll
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Update TOC
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
            
            // Update Sidebar
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${id}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Copy Code Function
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Скопировано!
        `;
        
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    });
}

// Search functionality (basic implementation)
const searchInput = document.querySelector('.search-input');
searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        console.log('Searching for:', query);
        // Here you would implement actual search functionality
    }
});

// Keyboard shortcut for search (Cmd/Ctrl + K)
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
    }
});

// Load selected documentation type
window.addEventListener('DOMContentLoaded', () => {
    const selectedDoc = localStorage.getItem('selectedDoc');
    if (selectedDoc && window.location.pathname.includes('doc-page.html')) {
        console.log('Loading documentation for:', selectedDoc);
        // Here you would load the appropriate documentation content
    }
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.doc-card, .next-step-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
};

// Initialize animations
if (document.querySelector('.docs-grid')) {
    animateOnScroll();
}