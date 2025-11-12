// ProDiesel JS - modal handling, form submission, smooth nav

document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    const burger = document.getElementById('burgerMenu');
    const mainNav = document.getElementById('mainNav');
    
    if (burger && mainNav) {
        burger.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            burger.classList.toggle('open');
        });

        // Close menu when clicking on a link
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                burger.classList.remove('open');
            });
        });
    }

    // Modal open/close
    window.openBookingModal = function(service = '') {
        const modal = document.getElementById('bookingModal');
        if (!modal) return;
        modal.classList.add('active');
        if (service) {
            const sel = modal.querySelector('select[name="service"]');
            if (sel) sel.value = service.toLowerCase();
        }
    }

    window.openPriceModal = function() {
        const modal = document.getElementById('priceModal');
        if (!modal) return;
        modal.classList.add('active');
    }

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.remove('active');
    }

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });

    // Forms: basic client-side handling
    function handleForm(form, callback) {
        if (!form) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const obj = Object.fromEntries(data.entries());

            // Basic validation
            if (!obj.name || !obj.phone) {
                alert('Будь ласка, заповніть ім\'я та телефон.');
                return;
            }

            // Here you would send data to server via fetch
            console.log('Form submit', obj);

            // Simulate success
            form.reset();
            if (typeof callback === 'function') callback();
            else alert('Дякуємо! Ваша заявка відправлена. Ми зв\'яжемося з вами найближчим часом.');
        });
    }

    handleForm(document.getElementById('contactForm'));
    handleForm(document.getElementById('bookingForm'), function() {
        closeModal('bookingModal');
        alert('Дякуємо! Ми отримали вашу заявку на запис.');
    });
    handleForm(document.getElementById('priceForm'), function() {
        closeModal('priceModal');
        alert('Дякуємо! Ми надішлемо орієнтовну ціну на ваш номер.');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const href = a.getAttribute('href');
            if (!href || href === '#') return;
            if (href.startsWith('#')) {
                e.preventDefault();
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
