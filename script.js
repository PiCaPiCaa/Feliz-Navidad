document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const audio = document.getElementById("navidad-audio");

    let opened = false;

    envelope.addEventListener("click", () => {
        if (!opened) {
            opened = true;

            envelope.classList.add("open");
            letter.classList.add("visible");

            audio.currentTime = 0;
            audio.play().catch(() => {});
        } else {
            opened = false;

            envelope.classList.remove("open");
            letter.classList.remove("visible");

            audio.pause();
            audio.currentTime = 0;
        }
    });
});
