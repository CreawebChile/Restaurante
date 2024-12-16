document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentIndex = 0;
    let interval;

    // Crear dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showTestimonial(index) {
        testimonials.forEach(item => {
            item.classList.remove('active');
            item.style.display = 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        testimonials[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showTestimonial(currentIndex);
        resetInterval();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 3000);
    }

    // Mostrar primer testimonio y comenzar rotación
    showTestimonial(0);
    interval = setInterval(nextTestimonial, 3000);

    // Pausar rotación al hover
    const slider = document.querySelector('.testimonials-slider');
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', resetInterval);
});
