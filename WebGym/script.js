document.addEventListener('scroll', function() {
    const element = document.querySelector('.element');
    element.style.animationPlayState = 'running';
}, { once: true });

