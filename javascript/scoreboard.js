export function saveScore(name, score) {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  scores.push({ name, score });
  localStorage.setItem('scores', JSON.stringify(scores));
}

export function getScores() {
  return (JSON.parse(localStorage.getItem('scores')) || [])
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export function renderScores() {
  const tbody = document.getElementById('scoreTable');
  if (!tbody) return;
  tbody.innerHTML = '';
  getScores().forEach((entry, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${i + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
    tbody.appendChild(row);
  });
}



// Initialiseer bij het laden
window.addEventListener("DOMContentLoaded", () => renderScores());
