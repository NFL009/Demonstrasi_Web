let targetNumber;
    let lives;

    function initGame() {
      targetNumber = Math.floor(Math.random() * 100) + 1;
      lives = 5;
      document.getElementById('livesCount').textContent = lives;
      document.getElementById('message').textContent = '';
      document.getElementById('message').className = '';
      document.getElementById('guessInput').disabled = false;
    }

    function checkGuess() {
      const guess = parseInt(document.getElementById('guessInput').value);

      if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Masukkan angka 1 - 100!", "error");
        return;
      }

      if (guess === targetNumber) {
        setMessage("Tebakanmu BENAR! 🎉", "success");
        document.getElementById('guessInput').disabled = true;
      } else {
        lives--;
        document.getElementById('livesCount').textContent = lives;

        if (lives === 0) {
          setMessage("Kamu KALAH! Angkanya adalah " + targetNumber, "error");
          document.getElementById('guessInput').disabled = true;
        } else {
          const hint = guess < targetNumber ? "Terlalu kecil!" : "Terlalu besar!";
          setMessage(hint, "info");
        }
      }

      document.getElementById('guessInput').value = '';
    }

    function setMessage(msg, className) {
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = msg;
      messageDiv.className = className;
    }

    function restartGame() {
      initGame();
    }

    // Mulai game saat halaman dimuat
    window.onload = initGame;