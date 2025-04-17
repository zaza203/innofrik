document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // Animation duration in ms
                const step = target / (duration / 16); // 60fps
                let current = 0;
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };
                updateCounter();
            });
        };
        // Intersection Observer to trigger animation when stats are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelector('.stats-section').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.stats-section').style.opacity = '1';
            observer.observe(document.querySelector('.stats-section'));
        }, 500);
    }
    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let currentTestimonial = 0;
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-item');
        const totalTestimonials = testimonials.length;
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        }
        showTestimonial(0);
        setInterval(nextTestimonial, 5000);
    }
    // Form submission
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function (e) {
    //         e.preventDefault();
    //         // Get form values
    //         const name = document.getElementById('name').value;
    //         const email = document.getElementById('email').value;
    //         const message = document.getElementById('message').value;
    //         // Simple validation
    //         if (!name || !email || !message) {
    //             alert('Please fill in all required fields.');
    //             return;

    //         }
    //         // Here you would typically send the form data to a server
    //         // For this example, we'll just show a success message
    //         alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
    //         contactForm.reset();
    //     });
    // }
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function () {
            navbarNav.classList.toggle('show');
        });
        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                if (navbarNav.classList.contains('show')) {
                    navbarNav.classList.remove('show');
                }
            });
        });
    }
    // Add animation class to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .benefit-item, .value-card, .team - card');
        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
        elements.forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);

        });
    };
    setTimeout(animateOnScroll, 500);
});