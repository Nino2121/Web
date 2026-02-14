document.addEventListener('DOMContentLoaded', () => {
    const timeElapsedElement = document.getElementById('time-elapsed');

    function updateTimer() {
        const now = new Date();
        
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const displayHours = hours < 10 ? '0' + hours : hours;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        // Aquí está tu texto con los 7 meses, 1 semana y 4 días
        timeElapsedElement.textContent =
            `7 meses, 1 semana, 4 días, ${displayHours} horas, ${displayMinutes} min, ${displaySeconds} seg`;
    }

    // Actualizar el contador cada segundo
    setInterval(updateTimer, 1000);
    updateTimer(); 

    // Generar corazones flotantes por toda la pantalla (Fondo animado)
    const bgHeartsContainer = document.getElementById('background-hearts');
    const heartColors = ['#ff0033', '#ff4d6d', '#ff758f', '#ff8fa3']; // Diferentes tonos de rojo/rosa

    for (let i = 0; i < 40; i++) { 
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Posición horizontal aleatoria en toda la pantalla
        heart.style.left = `${Math.random() * 100}vw`; 
        
        // Retraso y velocidad aleatorios
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.animationDuration = `${8 + Math.random() * 10}s`; // Suben a diferentes velocidades
        
        // Asignar un color aleatorio de nuestra paleta
        heart.style.backgroundColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        
        // Tamaño aleatorio para crear profundidad
        const size = Math.random() * 1.5 + 0.5;
        heart.style.transform = `scale(${size}) rotate(-45deg)`;

        bgHeartsContainer.appendChild(heart);
    }
});