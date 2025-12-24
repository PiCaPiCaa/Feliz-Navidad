document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const closeBtn = document.getElementById("close-btn");
    const audio = document.getElementById("navidad-audio");

    // Función Abrir
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        
        // Esperamos un poco a que suba la vista previa antes de mostrar la carta completa
        setTimeout(() => {
            letter.classList.add("active");
            audio.play().catch(e => console.log("Audio esperando interacción"));
        }, 600);
    });

    // Función Cerrar
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que el clic se propague al sobre
        letter.classList.remove("active");
        
        setTimeout(() => {
            envelope.classList.remove("open");
            audio.pause();
            audio.currentTime = 0; // Reinicia la canción
        }, 500);
    });
});
