// Modifica la función initMap para manejar errores
function initMap() {
    try {
        const restaurantLocation = { 
            lat: -33.42901527339799, 
            lng: -70.62355162466231  // Coordenadas de Providencia, Santiago
        };
        
        const mapOptions = {
            zoom: 15,
            center: restaurantLocation,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
            styles: [
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                }
            ]
        };

        const map = new google.maps.Map(
            document.getElementById('map'), 
            mapOptions
        );
        
        const marker = new google.maps.Marker({
            position: restaurantLocation,
            map: map,
            title: 'La Terraza del Chef',
            animation: google.maps.Animation.DROP
        });

        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding:10px"><h3>La Terraza del Chef</h3><p>Av. Providencia 1234, Santiago</p></div>'
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

    } catch (error) {
        console.error('Error al cargar el mapa:', error);
        document.getElementById('map').innerHTML = 
            '<p style="text-align:center;padding:20px;">Error al cargar el mapa. Por favor, intente más tarde.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Scroll to top functionality
    const scrollButton = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mejorar la funcionalidad del menú hamburguesa
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Cerrar menú al hacer scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    });

    // Initialize map if element exists
    if (document.getElementById('map')) {
        initMap();
    }
});
