const bird = document.getElementById("bird");
const scoreDisplay = document.getElementById("score");
const popup = document.getElementById("popup");
const finalScore = document.getElementById("finalScore");

let birdY = 200;
let gravity = 1.5;
let velocity = 0;
let isGameOver = false;
let score = 0;
let pipes = [];

function startGame() {
  popup.classList.add("hidden");
  birdY = 200;
  velocity = 0;
  score = 0;
  scoreDisplay.innerText = "Score : 0";

  // Hapus semua pipe lama
  pipes.forEach(p => {
    p.top.remove();
    p.bottom.remove();
  });
  pipes = [];

  isGameOver = false;
  bird.style.top = birdY + "px";

  requestAnimationFrame(gameLoop); // mulai gameplay
}

function createPipe() {
  const gap = 200; // ukuran celah antar pipa
  const minTop = 50;
  const maxTop = window.innerHeight - gap - 150;
  const topHeight = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
  const bottomY = topHeight + gap;

  const topPipe = document.createElement("img");
  topPipe.src = "kayu_bagian_atas_.png";
  topPipe.className = "pipe";
  topPipe.style.position = "absolute";
  topPipe.style.left = "100%";
  topPipe.style.top = "0px";
  topPipe.style.height = topHeight + "px";
  topPipe.style.width = "60px";
  topPipe.style.objectFit = "cover";

  const bottomPipe = document.createElement("img");
  bottomPipe.src = "kayu_bagian_bawah_.png";
  bottomPipe.className = "pipe";
  bottomPipe.style.position = "absolute";
  bottomPipe.style.left = "100%";
  bottomPipe.style.top = bottomY + "px";
  bottomPipe.style.height = (window.innerHeight - bottomY) + "px";
  bottomPipe.style.width = "60px";
  bottomPipe.style.objectFit = "cover";

  document.getElementById("gameContainer").appendChild(topPipe);
  document.getElementById("gameContainer").appendChild(bottomPipe);

  pipes.push({ top: topPipe, bottom: bottomPipe, x: window.innerWidth });
}

function gameLoop() {
  if (isGameOver) return;

  velocity += gravity;
  birdY += velocity;
  bird.style.top = birdY + "px";

  // Move pipes
  pipes.forEach(pipe => {
    pipe.x -= 3;
    pipe.top.style.left = pipe.x + "px";
    pipe.bottom.style.left = pipe.x + "px";

    // Collision
    const birdBox = bird.getBoundingClientRect();
    const topBox = pipe.top.getBoundingClientRect();
    const bottomBox = pipe.bottom.getBoundingClientRect();

    if (
      birdBox.right > topBox.left &&
      birdBox.left < topBox.right &&
      (birdBox.top < topBox.bottom || birdBox.bottom > bottomBox.top)
    ) {
      endGame();
    }

    // Add score
    if (!pipe.passed && pipe.x + 60 < 50) {
      pipe.passed = true;
      score++;
      scoreDisplay.innerText = "Score : " + score;
    }
  });

  // Remove off-screen pipes
  pipes = pipes.filter(pipe => pipe.x > -100);

  // Fall to ground or fly off screen
  if (birdY > window.innerHeight || birdY < -50) {
    endGame();
    return;
  }

  requestAnimationFrame(gameLoop);
}

function endGame() {
  isGameOver = true;
  finalScore.innerText = "Your Score : " + score;
  popup.classList.remove("hidden");
}

document.body.addEventListener("touchstart", () => {
  if (!isGameOver) {
    velocity = -10;
  }
});

// Generate pipes every 2.2 seconds
setInterval(() => {
  if (!isGameOver) createPipe();
}, 2200);

// Untuk mobile: tap
document.body.addEventListener("touchstart", () => {
  if (!isGameOver) {
    velocity = -10;
  }
});

// Untuk desktop: spasi
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isGameOver) {
    velocity = -10;
  }
});


window.onload = () => {
  popup.classList.remove("hidden");
};