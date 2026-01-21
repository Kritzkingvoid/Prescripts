function handlePlayClick() {
    clickCount++;

    const picked = pickMessage();
    if (!picked) return;

    showResultButtons();

    scrambleReveal(
        picked.text,
        scrambleDuration,
        revealDuration,
        t => display.textContent = t
    );
}
startBtn.addEventListener("click", handlePlayClick);

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Uhm.. Hello, are you here to Play? ~Sora",
        "Welcome back ~ R13n",
        "Testing.... Ahh wrong prescript. ~ Moirai",
        ".............. ~ ....",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    showResultTextIntro(randomMessage);
});