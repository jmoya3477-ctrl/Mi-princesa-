document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const openBtn = document.getElementById('openBtn'); // El corazón celeste
  const music = document.getElementById('bgMusic');
  const newspaper = document.getElementById('newspaper');

  // ABRIR AL TOCAR EL CORAZÓN CELESTE
    if(openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            envelope.classList.add('open');
            if(music) music.play().catch(() => console.log("Esperando interacción"));
            setTimeout(() => startTyping(loveText), 1200);
        });
    }

  envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
      envelope.classList.add('open');
      music.play().catch(() => {}); // Autoplay puede fallar, pero ok

      // Después de abrir el sobre, muestra el periódico con delay
      setTimeout(() => {
        newspaper.style.display = 'block';
        // Opcional: anima entrada del periódico con fade-in o slide
      }, 4000); // 1.8 segundos después de clic
    }
  });
});