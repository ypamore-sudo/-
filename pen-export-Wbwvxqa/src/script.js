function startDraw() {
  const ballRow = document.getElementById('ballRow');
  const fireworks = document.getElementById('fireworks');
  ballRow.innerHTML = '';
  fireworks.style.display = 'none';

  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
  const numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sorted = Array.from(numbers).sort((a, b) => a - b);

  sorted.forEach((num, index) => {
    setTimeout(() => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.textContent = num;

      const color = colors[index % colors.length];
      ball.style.backgroundColor = color;

      if (index === 6) {
        ball.classList.add('bonus');
      }

      ballRow.appendChild(ball);

      if (index === 6) {
        setTimeout(() => {
          fireworks.style.display = 'block';
          launchFireworks();
        }, 1000);
      }
    }, index * 1200);
  });
}

function launchFireworks() {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementById('fireworks').appendChild(canvas);

  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 5 + 2;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  setTimeout(() => {
    document.getElementById('fireworks').innerHTML = '';
    document.getElementById('fireworks').style.display = 'none';
  }, 2000);
}
function startDraw() {
  const ballRow = document.getElementById('ballRow');
  const fireworks = document.getElementById('fireworks');
  ballRow.innerHTML = '';
  fireworks.style.display = 'none';

  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
  const numbers = new Set();
  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sorted = Array.from(numbers).sort((a, b) => a - b);
  const mainNumbers = sorted.slice(0, 6);
  const bonusNumber = sorted[6];

  mainNumbers.forEach((num, index) => {
    setTimeout(() => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.textContent = num;
      ball.style.backgroundColor = colors[index % colors.length];
      ballRow.appendChild(ball);

      if (index === 5) {
        // + 기호 추가
        const plus = document.createElement('div');
        plus.className = 'separator';
        plus.textContent = '+';
        ballRow.appendChild(plus);
      }
    }, index * 1000);
  });

  // 보너스 번호
  setTimeout(() => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'ball bonus';
    bonusBall.textContent = bonusNumber;
    ballRow.appendChild(bonusBall);

    setTimeout(() => {
      fireworks.style.display = 'block';
      launchFireworks();
    }, 1000);
  }, mainNumbers.length * 1000);
}