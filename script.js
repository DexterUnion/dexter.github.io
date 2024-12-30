
const landing = document.getElementById("landing");
const hacked = document.getElementById("hacked");
const startPrankButton = document.getElementById("startPrank");
const prankAudio = document.getElementById("prankAudio");
const matrixCanvas = document.getElementById("matrixRain");
const ctx = matrixCanvas.getContext("2d");

if (!ctx) {
    console.error("Failed to initialize canvas context.");
}

startPrankButton.addEventListener("click", () => {
    
    landing.classList.add("hidden");

    
    hacked.classList.remove("hidden");

    prankAudio.play();

    showCommands();
});

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
const fontSize = 16;
const columns = Math.floor(matrixCanvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrixRain, 33);

const consoleDiv = document.getElementById("console");
const commands = [
    "> This Is A Warning Message...",
    "> We Have Covered Your Cyber Space",
    "> Be Ready For Cyber War",
    "> We Will Come And Make",
    "> Hacked by Dexter ",
    "> We Do Not Forgive / Forget",
    "> Expect Us"
];

let commandIndex = 0;

function showCommands() {
    if (commandIndex < commands.length) {
        const p = document.createElement("p");
        p.textContent = commands[commandIndex++];
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
        setTimeout(showCommands, 1000); 
    }
}
