    const choices = [
      { name: 'Gunting', emoji: '✌️' },
      { name: 'Batu', emoji: '✊' },
      { name: 'Kertas', emoji: '✋' },
    ];
    let mode = 'bot';
    let player1Choice = null;

    function startGame(selectedMode) {
      mode = selectedMode;
      document.getElementById('home').style.display = 'none';
      document.getElementById('result').style.display = 'none';
      document.getElementById('game').style.display = 'block';
      player1Choice = null;

      document.getElementById('status-label').innerText = mode === 'bot' ? 'Komputer memilih :' : 'Pemain 1 memilih :';
      document.getElementById('player-label').innerText = mode === 'bot' ? 'Anda memilih :' : 'Pemain 1 memilih :';
      document.getElementById('enemy-icon').innerText = '?';
      document.getElementById('enemy-text').innerText = '???';

      const btns = choices.map(choice => `
        <div class="choice-btn">
          <button onclick="choose('${choice.name}')">
            <span>${choice.emoji}</span>
          </button>
          <button onclick="choose('${choice.name}')">${choice.name}</button>
        </div>
      `).join('');
      document.getElementById('choices').innerHTML = btns;
    }

    function choose(choice) {
      if (mode === 'bot') {
        const bot = choices[Math.floor(Math.random() * 3)].name;
        showResult(choice, bot);
      } else {
        if (!player1Choice) {
          player1Choice = choice;
          document.getElementById('player-label').innerText = 'Pemain 2 memilih :';
        } else {
          showResult(player1Choice, choice);
        }
      }
    }

    function showResult(player, enemy) {
      document.getElementById('game').style.display = 'none';
      document.getElementById('result').style.display = 'block';
      const winMap = {
        Gunting: 'Kertas',
        Kertas: 'Batu',
        Batu: 'Gunting'
      };
      let resultText = '', color1 = '', color2 = '';
      if (player === enemy) {
        resultText = 'seri'; color1 = color2 = 'blue';
      } else if (winMap[player] === enemy) {
        resultText = 'menang'; color1 = 'green'; color2 = 'red';
      } else {
        resultText = 'kalah'; color1 = 'red'; color2 = 'green';
      }
      document.getElementById('result-enemy').innerHTML = `${mode === 'bot' ? 'Komputer' : 'Pemain 1'} memilih : <span class="${color2}">(${resultText === 'menang' ? 'kalah' : resultText === 'kalah' ? 'menang' : 'seri'})</span>`;
      document.getElementById('enemy-icon-final').innerText = choices.find(c => c.name === enemy).emoji;
      document.getElementById('enemy-text-final').innerText = enemy;
      document.getElementById('result-player').innerHTML = `${mode === 'bot' ? 'Anda' : 'Pemain 2'} memilih : <span class="${color1}">(${resultText})</span>`;
      document.getElementById('player-icon-final').innerText = choices.find(c => c.name === player).emoji;
      document.getElementById('player-text-final').innerText = player;
    }

    function backHome() {
      document.getElementById('home').style.display = 'block';
      document.getElementById('game').style.display = 'none';
      document.getElementById('result').style.display = 'none';
    }

    function mainUlang() {
      startGame(mode);
    }