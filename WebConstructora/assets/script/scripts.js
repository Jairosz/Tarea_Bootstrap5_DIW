// Función para obtener un color aleatorio entre los especificados
function getRandomColor() {
    const colors = ['#00ff00', '#ff99cc', '#ff3801'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Obtener todos los elementos con la clase 'text-shadow-effect'
  const elements = document.querySelectorAll('.text-shadow-effect');

  // Aplicar estilos dinámicamente a cada elemento
  elements.forEach(element => {
    const randomColor = getRandomColor();
    element.style.color = randomColor;

    element.style.textShadow = `0 0 10px ${randomColor}, 0 0 30px ${randomColor}, 0 0 80px ${randomColor}`;
  });