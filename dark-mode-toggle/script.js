const title = document.getElementById('title');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    title.textContent = 'Dark Mode';
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    title.textContent = 'Light Mode';
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
