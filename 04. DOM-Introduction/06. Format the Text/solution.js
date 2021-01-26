function solve() {
  const sentences = document.getElementById('input').value.split('.').map((s) => s.trim()).filter(s => s.length > 0);

  for (let i = 0; i < sentences.length; i += 3) {
    document.getElementById('output').innerHTML += `<p>${sentences.slice(i, i + 3).join('.')}.</p>`;

  }

}