let noAttempts = 0;
const noBtn = document.getElementById('noBtn');
const attemptsEl = document.getElementById('attempts');

const funnyMessages = [
    "Are you sure about that? 😏",
    "The button is shy around you~",
    "Try again, beautiful 💫",
    "That's not the right answer...",
    "C'mon, you know you want to 😊",
    "The button agrees with me!",
    "Just say yes already~ 💛",
    "I won't give up that easily",
    "Your heart says otherwise 💕",
    "Okay fine... just kidding! 😘"
];

function runAway() {
    noAttempts++;

    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    noBtn.classList.add('moving');

    const maxX = containerRect.width - 100;
    const maxY = containerRect.height - 60;

    const randomX = Math.random() * maxX - maxX/2;
    const randomY = Math.random() * maxY - maxY/2;

    let scale = 1;
    if (noAttempts > 10) {
        scale = 0.3;
        noBtn.classList.add('tiny');
        noBtn.textContent = "okay 🥺";
    } else if (noAttempts > 5) {
        scale = 0.6;
        noBtn.classList.add('shrinking');
    }

    noBtn.style.setProperty('--x', `${randomX}px`);
    noBtn.style.setProperty('--y', `${randomY}px`);
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;

    attemptsEl.textContent = funnyMessages[Math.min(noAttempts - 1, funnyMessages.length - 1)];
}

function handleNoClick(e) {
    e.preventDefault();
    attemptsEl.textContent = "Nice try~ but no isn't an option 😘";
    runAway();
}

noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    runAway();
}, { passive: false });

noBtn.addEventListener('touchend', function(e) {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

function sayYes() {
    document.getElementById('questionContent').style.display = 'none';
    document.getElementById('successScreen').classList.add('show');
    createConfetti();
    createHeartExplosion();
}

function createConfetti() {
    const colors = ['#ff4d6d', '#c9184a', '#ff758f', '#ffb3c1', '#fff0f3', '#ffd700'];

    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3500);
        }, i * 20);
    }
}

function createHeartExplosion() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = ['❤️', '💕', '💖', '💗', '💓', '💛'][Math.floor(Math.random() * 6)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }, i * 80);
    }
}

function createBackgroundHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = ['❤️', '💕', '💖'][Math.floor(Math.random() * 3)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }, 800);
}

function createPetals() {
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 4 + 5) + 's';
        petal.style.width = (Math.random() * 10 + 10) + 'px';
        petal.style.height = petal.style.width;
        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 9000);
    }, 600);
}

function createSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = (Math.random() * 1 + 1) + 's';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 2000);
    }, 200);
}

createBackgroundHearts();
createPetals();
createSparkles();
