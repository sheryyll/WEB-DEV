const celestial = document.getElementById('celestial');
const body = document.body;
const starsContainer = document.getElementById('stars');
let isDay = true; 
const createStars = (count) => {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add("star");

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 2}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    starsContainer.appendChild(star);
  }
};

createStars(100);

celestial.addEventListener('click', () => {
  if (isDay) {
    celestial.textContent = '🌙';
    celestial.classList.remove('sun');
    celestial.classList.add('moon');
    body.classList.add('night');
  } else {
    celestial.textContent = '☀️';
    celestial.classList.remove('moon');
    celestial.classList.add('sun');
    body.classList.remove('night');
  }
  isDay = !isDay;
});
