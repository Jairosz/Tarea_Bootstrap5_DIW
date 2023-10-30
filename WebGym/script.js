document.addEventListener('scroll', function() {
    const element = document.querySelector('.element');
    element.style.animationPlayState = 'running';
}, { once: true });

const carrusel = document.getElementById('carrusel');
        const imagenes = document.getElementById('imagenes');
        const anterior = document.getElementById('anterior');
        const siguiente = document.getElementById('siguiente');

        let indice = 0;

        anterior.addEventListener('click', () => {
            if (indice > 0) {
                indice--;
                actualizarCarrusel();
            }
        });

        siguiente.addEventListener('click', () => {
            if (indice < 2) {
                indice++;
                actualizarCarrusel();
            }
        });

        function actualizarCarrusel() {
            imagenes.style.transform = `translateX(-${indice * 400}px)`;
        }
