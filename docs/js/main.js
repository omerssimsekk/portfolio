// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle navigation
burger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    // Only close if the menu is active and click is outside menu and burger
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
const typeWriter = document.querySelector('.typewriter');
const text = typeWriter.textContent;
typeWriter.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typeWriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// Start typewriter effect when the page loads
window.addEventListener('load', type);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(li => {
        li.querySelector('a').classList.remove('active');
        if (li.querySelector(`a[href="#${current}"]`)) {
            li.querySelector(`a[href="#${current}"]`).classList.add('active');
        }
    });
});

// Add scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.classList.add('scroll-top');
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

// Add some CSS for the new elements
const style = document.createElement('style');
style.textContent = `
    .nav-active {
        transform: translateX(0%) !important;
    }

    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line2 {
        opacity: 0;
    }

    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in-section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateY(100px);
    }

    .scroll-top.show {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-top:hover {
        background: var(--secondary-color);
    }

    .active {
        color: var(--primary-color) !important;
    }

    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            right: 0;
            height: 100vh;
            top: 0;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 60%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            padding: 2rem;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        }
    }

    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.toggle .line2 {
        opacity: 0;
    }

    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;

document.head.appendChild(style);

// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Listen for a click on the button
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}); 