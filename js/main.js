document.addEventListener('DOMContentLoaded', function() {

    // URL de tu Google Apps Script
    const SCRIPT_URL = 'URL de tu Google Apps Script';

    // --- Scroll suave para el botón del hero ---
    const heroCtaBtn = document.getElementById('hero-cta-btn');
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // --- Lógica para el botón "Volver Arriba" ---
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Animaciones al hacer scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    // --- Manejo del Formulario Principal (CTA) ---
    const contactForm = document.querySelector('.cta-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const messageEl = document.getElementById('contact-form-message');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Deshabilitar botón mientras se envía
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Obtener los datos del formulario
            const formData = {
                nombre: contactForm.querySelector('input[name="name"]').value,
                email: contactForm.querySelector('input[name="email"]').value,
                telefono: contactForm.querySelector('input[name="phone"]').value || 'No proporcionado'
            };
            
            // Enviar datos a Google Sheets
            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(() => {
                // Mostrar mensaje de éxito
                messageEl.textContent = '¡Gracias! Tus datos han sido registrados correctamente.';
                messageEl.style.color = '#4CAF50';
                messageEl.classList.add('show');
                contactForm.reset();
                
                // Rehabilitar botón
                submitBtn.disabled = false;
                submitBtn.textContent = 'Solicitar Mi Consulta Gratuita';
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    messageEl.classList.remove('show');
                }, 5000);
            })
            .catch(error => {
                // Mostrar mensaje de error
                messageEl.textContent = 'Hubo un error. Por favor, intenta nuevamente.';
                messageEl.style.color = '#f44336';
                messageEl.classList.add('show');
                
                // Rehabilitar botón
                submitBtn.disabled = false;
                submitBtn.textContent = 'Solicitar Mi Consulta Gratuita';
                
                console.error('Error:', error);
            });
        });
    }
});