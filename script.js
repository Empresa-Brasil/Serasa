document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('analyze-form');
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');
  const retryBtn = document.getElementById('try-again');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultText.textContent = 'Nome negativado';
    form.hidden = true;
    resultDiv.hidden = false;
  });

  retryBtn.addEventListener('click', () => {
    form.reset();
    resultDiv.hidden = true;
    form.hidden = false;
  });
});
