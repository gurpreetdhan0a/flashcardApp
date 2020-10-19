document.addEventListener('DOMContentLoaded', (e) => {
  const hint = document.querySelector('.hint');
  const cardTitle = document.querySelector('.card-title');
  if (hint) {
    var hintShowButton = document.createElement('BUTTON');
    hintShowButton.textContent = 'Show hint';
    hint.parentNode.insertBefore(hintShowButton, hint);
    hint.style.display = 'none';

    hintShowButton.addEventListener('click', (e) => {
      hint.style.display = '';
      e.target.style.display = 'none';

    })
  }
  if (cardTitle.innerHTML === 'answer')
      {
        hintShowButton.style.display = 'none';
      }
})