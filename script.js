document.addEventListener('DOMContentLoaded', () => {
  const raffleForm = document.getElementById('raffleForm');
  const entriesList = document.getElementById('entriesList');
  const drawWinnerButton = document.getElementById('drawWinner');
  const winnerDiv = document.getElementById('winner');
  let entries = [];

  raffleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    if (name && email) {
      entries.push({ name, email });
      const entryItem = document.createElement('li');
      // entryItem.textContent = `${name} (${email})`;
      entryItem.textContent = `${name}`;
      entriesList.appendChild(entryItem);
      raffleForm.reset();
    }
  });

  drawWinnerButton.addEventListener('click', () => {
    if (entries.length === 0) {
      alert('No entries to draw from.');
      return;
    }
    const winnerIndex = Math.floor(Math.random() * entries.length);
    const winner = entries[winnerIndex];
    winnerDiv.textContent = `The winner is: ${winner.name} (${winner.email})`;
  });
});

// ********** set date ************
// select span
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
