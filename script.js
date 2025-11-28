let playerScore = 0;
    let cpuScore = 0;
    let drawScore = 0;

    function play(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      const fightArea = document.getElementById('fight-area');
      const resultArea = document.getElementById('result');
      let resultText = '';

      // Reset fight area
      fightArea.innerHTML = '';

      // Create fighter images
      const userImg = document.createElement('img');
      userImg.src = `images/${userChoice}.png`;
      userImg.classList.add('fighter', 'fighter-left');

      const computerImg = document.createElement('img');
      computerImg.src = `images/${computerChoice}.png`;
      computerImg.classList.add('fighter', 'fighter-right');

      fightArea.appendChild(userImg);
      fightArea.appendChild(computerImg);

      // Animate fighters
      setTimeout(() => {
        userImg.classList.add('attack-left');
        computerImg.classList.add('attack-right');
      }, 100);

      // Flash effect when clash
      setTimeout(() => {
        const flash = document.createElement('div');
        flash.classList.add('flash');
        fightArea.appendChild(flash);
      }, 600);

      // Show result and update score
      setTimeout(() => {
        if (userChoice === computerChoice) {
          resultText = "🤝 It's a tie! Both chose " + userChoice + ".";
          drawScore++;
        } else if (
          (userChoice === 'rock' && computerChoice === 'scissors') ||
          (userChoice === 'paper' && computerChoice === 'rock') ||
          (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
          resultText = "🏆 You win! " + userChoice + " beats " + computerChoice + "!";
          playerScore++;
        } else {
          resultText = "💥 You lose! " + computerChoice + " beats " + userChoice + "!";
          cpuScore++;
        }

        resultArea.innerText = resultText;

        // Update scores
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('cpu-score').innerText = cpuScore;
        document.getElementById('draw-score').innerText = drawScore;
      }, 900); // After animation and flash
    }
