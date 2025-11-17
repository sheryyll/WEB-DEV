let count = 0;

const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');
const display = document.getElementById('count-display');

incrementButton.addEventListener("click", () => {
    count++;
    display.textContent = count;
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        display.textContent = count;
    }
});

resetButton.addEventListener("click", () => {
    count = 0;              
    display.textContent = count;
});
