document.addEventListener('DOMContentLoaded', function() {
    // Toggle 'Sobre' section
    const toggleButton = document.querySelector('.botao-toggle');
    const conteudoSobre = document.getElementById('conteudoSobre');

    toggleButton.addEventListener('click', function() {
        conteudoSobre.classList.toggle('conteudo-escondido');
        toggleButton.textContent = conteudoSobre.classList.contains('conteudo-escondido') ? '➕ Quem é Natália Ribeiro?' : '➖ Quem é Natália Ribeiro?';
    });

    // Carousel functionality for flashes
    const flashes = document.querySelectorAll('.carrossel-flashes img');
    let currentFlash = 0;

    function showFlash(index) {
        flashes.forEach((flash, i) => {
            flash.style.display = i === index ? 'block' : 'none';
        });
    }

    showFlash(currentFlash);

    setInterval(() => {
        currentFlash = (currentFlash + 1) % flashes.length;
        showFlash(currentFlash);
    }, 3000); // Change flash every 3 seconds
});