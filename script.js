const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

let tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    tasks.push({
      text,
      completed: false
    });
    render();
    input.value = '';
  }
});

function render() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div>
        <button class="complete-button" data-index="${index}">${task.completed ? 'Desfazer' : 'Concluir'}</button>
        <button class="delete-button" data-index="${index}">Excluir</button>
      </div>
    `;
    const completeButton = li.querySelector('.complete-button');
    const deleteButton = li.querySelector('.delete-button');
    completeButton.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      render();
    });
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      render();
    });
    list.appendChild(li);
  });
}
