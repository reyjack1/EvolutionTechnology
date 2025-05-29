$(document).ready(function() {
    // ---------- SLIDESHOW AUTOMÁTICO ----------
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        slides.hide();
        slides.eq(index).fadeIn();
    }

    // Próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Inicia mostrando o primeiro slide
    showSlide(currentIndex);

    // Troca de slide a cada 3 segundos
    setInterval(nextSlide, 3000);

    /// Menu mobile toggle
$('.menu-toggle').on('click keypress', function(e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        $('.nav-links').toggleClass('active');
    }
});
// Dropdown mobile toggle
$('.dropdown > a').on('click', function(e) {
    if ($(window).width() <= 768) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    }
});

    // ---------- ROLAGEM HORIZONTAL DOS SERVIÇOS (MOBILE) ----------
    const container = document.querySelector('.servico-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Eventos para mouse
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3; // Velocidade de deslize
        container.scrollLeft = scrollLeft - walk;
    });

    // Eventos para toque (touch) em dispositivos móveis
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('touchend', () => {
        isDown = false;
    });
    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
    });

    // ---------- PORTFÓLIO CARD CLICÁVEL ----------
    $('.portfolio-card').on('click keypress', function(e) {
        if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
            const url = $(this).data('link');
            if(url) {
                window.open(url, '_blank'); // Abre em nova aba
            }
        }
    });

    // ---------- BLOG CARD CLICÁVEL ----------
    $('.blog-card').on('click keypress', function(e) {
        if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
            const url = $(this).data('link');
            if(url) window.open(url, '_blank');
        }
    });
});