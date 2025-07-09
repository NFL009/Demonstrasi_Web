    const board = document.getElementById("board");
    const turnDisplay = document.getElementById("turn");
    const status = document.getElementById("status");
    let currentTurn = "X";
    const cells = [];

    function checkWin(player) {
      const winPositions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      return winPositions.some(pos => pos.every(i => cells[i].textContent === player));
    }

    function endGame(message, color) {
      status.innerHTML = message;
      status.style.color = color;
      board.style.pointerEvents = 'none';
    }

    function handleClick(e) {
      const cell = e.target;
      if (cell.textContent) return;
      cell.textContent = currentTurn;
      cell.classList.add(currentTurn.toLowerCase());
      if (checkWin(currentTurn)) {
        endGame(`${currentTurn} menang!`, currentTurn === 'X' ? 'red' : 'blue');
        return;
      }
      if (cells.every(cell => cell.textContent)) {
        endGame("Seri!", "black");
        return;
      }
      currentTurn = currentTurn === "X" ? "O" : "X";
      turnDisplay.textContent = currentTurn;
      turnDisplay.style.color = currentTurn === "X" ? "red" : "blue";
    }

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", handleClick);
      board.appendChild(cell);
      cells.push(cell);
    }