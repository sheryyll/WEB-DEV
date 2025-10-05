function checkLeapYear() {
  const year = document.getElementById('yearInput').value.trim();
  const result = document.getElementById('result');

  if (year === "") {
    result.textContent = "🌘 Please enter a year!";
    result.style.color = "#FFC66B";
    result.classList.add('show');
    return;
  }

  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  if (isLeap) {
    result.textContent = `🌕 ${year} is a Leap Year!`;
    result.style.color = "#AFCBFF"; 
  } else {
    result.textContent = `🌑 ${year} is NOT a Leap Year.`;
    result.style.color = "#FFC66B";
  }

  result.classList.add('show');
}
