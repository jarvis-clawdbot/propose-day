// Propose Day Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initHearts();
    initParticles();
    initCountdown();
    initMessageReveal();
    initCustomCursor();
    initScrollAnimations();
    initInteractiveCards();
});

// ==================== Floating Hearts ====================
function initHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤', '💕', '💗', '💖', '💓', '💘'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 13000);
    }
    
    // Create hearts at intervals
    setInterval(createHeart, 500);
    
    // Create initial batch
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 300);
    }
}

// ==================== Sparkle Particles ====================
function initParticles() {
    const container = document.getElementById('particles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);
    
    // Initial batch
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }
}

// ==================== Countdown Timer ====================
function initCountdown() {
    // Set a special date (you can customize this)
    const specialDate = new Date();
    specialDate.setHours(0, 0, 0, 0);
    specialDate.setDate(specialDate.getDate()); // Today
    
    function updateCountdown() {
        const now = new Date();
        const diff = now - specialDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== Message Reveal ====================
function initMessageReveal() {
    const revealBtn = document.getElementById('revealBtn');
    const messageBox = document.getElementById('messageBox');
    
    if (!revealBtn || !messageBox) return;
    
    const messages = [
        "Every time I see you, my heart skips a beat. The way you smile, the way you laugh, the way you make even ordinary moments feel extraordinary.",
        "In a world full of possibilities, you're the best one that ever happened to me. Your presence is my favorite place to be.",
        "I've found my home in your smile and my peace in your embrace. With you, every tomorrow looks brighter.",
        "You are not just a chapter in my life, you are the whole story. Every page with you is worth reading.",
        "The best thing about my day is talking to you. The second best thing is being with you. And the third is thinking about you.",
        "I didn't plan on falling for you, but it was the best surprise of my life. You've made everything more beautiful.",
        "With you, I've learned that some feelings are too big for words. But I'll spend forever trying to express them.",
        "You're my favorite notification, my best distraction, and the love I never knew I needed.",
        "Every love story is beautiful, but ours is my favorite. Because it's real, it's us, and it's everything.",
        "I've never believed in destiny until I met you. Now I know some things are just meant to be."
    ];
    
    let currentMessage = 0;
    
    revealBtn.addEventListener('click', function() {
        const messageText = messageBox.querySelector('.message-text');
        messageText.style.opacity = 0;
        messageText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentMessage = (currentMessage + 1) % messages.length;
            messageText.textContent = messages[currentMessage];
            messageText.style.opacity = 1;
            messageText.style.transform = 'translateY(0)';
        }, 300);
        
        // Add special effect
        messageBox.style.transform = 'scale(1.02)';
        setTimeout(() => {
            messageBox.style.transform = 'scale(1)';
        }, 200);
    });
}

// ==================== Custom Cursor Sparkle ====================
function initCustomCursor() {
    const sparkle = document.getElementById('cursorSparkle');
    
    if (!sparkle) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let sparkleX = 0;
    let sparkleY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateSparkle() {
        sparkleX += (mouseX - sparkleX) * 0.1;
        sparkleY += (mouseY - sparkleY) * 0.1;
        
        sparkle.style.left = sparkleX + 'px';
        sparkle.style.top = sparkleY + 'px';
        
        requestAnimationFrame(animateSparkle);
    }
    
    animateSparkle();
    
    // Add sparkle on click
    document.addEventListener('click', function(e) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createClickSparkle(e.clientX, e.clientY);
            }, i * 50);
        }
    });
    
    function createClickSparkle(x, y) {
        const sparkleEl = document.createElement('div');
        sparkleEl.innerHTML = '❤';
        sparkleEl.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: ${Math.random() * 15 + 10}px;
            pointer-events: none;
            z-index: 10001;
            animation: sparkleFade 1s ease-out forwards;
        `;
        document.body.appendChild(sparkleEl);
        
        setTimeout(() => {
            sparkleEl.remove();
        }, 1000);
    }
}

// Add sparkle animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFade {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== Scroll Animations ====================
function initScrollAnimations() {
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
    
    // Observe elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// ==================== Interactive Cards ====================
function initInteractiveCards() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(196, 30, 58, 0.1);
                border-radius: 20px;
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ==================== Typing Effect for Title ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ==================== Parallax Effect ====================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Console easter egg
console.log('%c❤️ Happy Propose Day! ❤️', 'font-size: 24px; color: #c41e3a; font-family: Georgia, serif;');
console.log('%cMade with love and care', 'font-size: 12px; color: #666;');
