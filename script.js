document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const audio = document.getElementById("navidad-audio");

    let opened = false;

    envelope.addEventListener("click", function () {
        if (!opened) {
            opened = true;
            envelope.classList.add("open");
            letter.classList.add("visible");

            // Intentar reproducir la música al hacer clic (interacción del usuario)
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(() => {
                    // Si el navegador bloquea el autoplay, no pasa nada; al siguiente clic sonará.
                });
            }
        } else {
            // Si quieres que al segundo clic pare la música, descomenta estas líneas:
            // opened = false;
            // envelope.classList.remove("open");
            // letter.classList.remove("visible");
            // if (audio) audio.pause();
        }
    });
});
