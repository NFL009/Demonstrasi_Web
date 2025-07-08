    let target = Math.floor(Math.random() * 100) + 1;
    let lives = 6;

    function updateHearts() {
      let hearts = '';
      for (let i = 0; i < 6; i++) {
        hearts += i < lives ? '❤️' : '🖤';
      }
      document.getElementById("livesDisplay").innerHTML = hearts;
    }

    function setStatus(text) {
      document.getElementById("statusText").textContent = text;
    }

    function checkGuess() {
      const guess = parseInt(document.getElementById("guessInput").value);
      if (isNaN(guess) || guess < 1 || guess > 100) {
        setStatus("Masukkan angka 1-100");
        return;
      }

      if (guess === target) {
        setStatus("Kamu BENAR 🎉");
        document.getElementById("guessInput").disabled = true;
        return;
      }

      lives--;
      updateHearts();

      if (lives === 0) {
        setStatus("Kamu KALAH 😢 (Angka: " + target + ")");
        document.getElementById("guessInput").disabled = true;
        return;
      }

      setStatus(guess < target ? "Terlalu kecil" : "Terlalu besar");
    }

    updateHearts();