function updateCounters() {
    achievedSpan.textContent = `PASS: ${achieved}`;
    failedSpan.textContent = `FAILED: ${failed}`;
    totalSpan.textContent = `PRESCRIPTS: ${total}`;
}

function showPlayButton() {
    buttonContainer.innerHTML = `<button id="startBtn">Next</button>`;
    document.getElementById("startBtn").addEventListener("click", handlePlayClick);
}

function showResultText(text) {
    canResolve = false;
    scrambleReveal(text, 0.3, 0.8, t => display.textContent = t, showPlayButton);
}

function showResultTextIntro(text) {
    scrambleReveal(text, 0.3, 0.8,t => display.textContent = t,);
}

function showResultButtons() {
    canResolve = false;

    buttonContainer.innerHTML = `
        <button id="achievedBtn" disabled>Pass</button>
        <button id="failedBtn" disabled>Failed</button>
    `;

    document.getElementById("achievedBtn").onclick = () => {
        if (!canResolve) return;
        achieved++; total++;
        updateCounters();
        showResultText("CleAr");
    };

    document.getElementById("failedBtn").onclick = () => {
        if (!canResolve) return;
        failed++; total++;
        updateCounters();
        showResultText("FaIL");
    };
}
function redirect(url, newTab = true) {
    if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}

document.getElementById("meBtn").addEventListener("click", () => {
    redirect("https://www.youtube.com/watch?v=ST5DWHnT_Po");
});

document.getElementById("gitBtn").addEventListener("click", () => {
    redirect("https://github.com/Kritzkingvoid");
});

document.getElementById("kofiBtn").addEventListener("click", () => {
    redirect("https://ko-fi.com/kritzkingvoid");
});

document.getElementById("soraBtn").addEventListener("click", () => {
          showResultText("Uhmm.. Wanna buy ice cream?");
});
