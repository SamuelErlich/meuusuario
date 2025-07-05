// Dados de exemplo para as thumbnails
const portfolioData = [
    {
        id: 1,
        image: "Thumb02.jpg"
    },
    {
        id: 2,
        image: "ThumbEP67.jpg",
    },
    {
        id: 3,
        image: "ThumbEP68.jpg"
    },
    {
        id: 4,
        image: "ThumbEP66.png"
    },
    {
        id: 5,
        image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Neon+Dreams"
    },
    {
        id: 6,
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Space+Odyssey"
    }
];

// Elementos DOM
const portfolioGrid = document.getElementById('portfolioGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxClose = document.querySelector('.lightbox-close');
const contactForm = document.getElementById('contactForm');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolio();
    setupEventListeners();
    setupScrollAnimations();
    setupParallax();
});

// Carregar portfólio
function loadPortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
        const portfolioItem = createPortfolioItem(item);
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Adicionar animação de entrada
    setTimeout(() => {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Criar item do portfólio
function createPortfolioItem(data) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    
    item.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="portfolio-image">
        <div class="portfolio-overlay">
            <i class="fas fa-search-plus"></i>
        </div>
        <div class="portfolio-info">
            <h3 class="portfolio-title">${data.title}</h3>
            <p class="portfolio-description">${data.description}</p>
        </div>
    `;
    
    item.addEventListener('click', () => openLightbox(data));
    
    return item;
}

// Abrir lightbox
function openLightbox(data) {
    lightboxImage.src = data.image;
    lightboxTitle.textContent = data.title;
    lightboxDescription.textContent = data.description;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animação de entrada
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
}

// Fechar lightbox
function closeLightbox() {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Configurar event listeners
function setupEventListeners() {
    // Lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Escape key para fechar lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
    
    // Formulário de contato
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Menu mobile
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Navegação suave
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
}

// Toggle menu mobile
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Manipular envio do formulário
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simular envio
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = '<span>Enviado!</span><i class="fas fa-check"></i>';
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
}

// Configurar animações de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.section-header, .contact-item, .portfolio-item').forEach(el => {
        observer.observe(el);
    });
}

// Configurar efeito parallax
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-cube');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `rotate(45deg) translateY(${yPos}px)`;
        });
        
        // Atualizar indicador de scroll
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - (scrolled / window.innerHeight));
            scrollIndicator.style.opacity = opacity;
        }
    });
}

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .lightbox {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    @media (max-width: 720px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Adicionar efeitos de cursor personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.custom-cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Adicionar efeito de hover nos links
document.querySelectorAll('a, button, .portfolio-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, transparent 70%)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)';
        }
    });
});

