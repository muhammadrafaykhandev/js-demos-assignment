// Scope & Closure Concept
function createCounter() {
    let count = 0; // Private variable via Closure
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = 0; return count; }
    };
}

const counter = createCounter();

// DOM Elements Selection
const countDisplay = document.getElementById('count');
const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');

// Event Handling
incBtn.addEventListener('click', () => {
    countDisplay.textContent = counter.increment();
});

decBtn.addEventListener('click', () => {
    countDisplay.textContent = counter.decrement();
});

resetBtn.addEventListener('click', () => {
    countDisplay.textContent = counter.reset();
});
