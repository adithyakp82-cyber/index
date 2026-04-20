// Update Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
    
    // Update Greeting based on time
    const greetingElement = document.getElementById('greeting');
    if (now.getHours() < 12) greetingElement.textContent = 'Good morning';
    else if (now.getHours() < 18) greetingElement.textContent = 'Good afternoon';
    else greetingElement.textContent = 'Good evening';
}

setInterval(updateClock, 1000);
updateClock();

// Task List Logic
const focusInput = document.getElementById('focus-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const text = focusInput.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${text}</span>
        <span class="delete-task">delete</span>
    `;

    li.querySelector('.delete-task').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    focusInput.value = '';
}

addBtn.addEventListener('click', addTask);
focusInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Random Quotes
const quotes = [
    "\"Simplicity is the ultimate sophistication.\"",
    "\"Focus on being productive instead of busy.\"",
    "\"Do not wait to strike till the iron is hot; but make it hot by striking.\"",
    "\"The secret of getting ahead is getting started.\"",
    "\"Quality is not an act, it is a habit.\""
];

document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
