init(); // Function hoisting demo

function init() {
    const input = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('task-list');

    addBtn.addEventListener('click', () => {
        if (!input.value.trim()) return;

        const li = document.createElement('li');
        li.textContent = input.value;
        li.addEventListener('click', () => li.remove());

        list.appendChild(li);
        input.value = '';
    });
}
