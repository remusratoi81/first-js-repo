const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const newTask = document.createElement('li');
  const taskSpan = document.createElement('span');
  const editButton = document.createElement('button');
  const removeButton = document.createElement('button');

  taskSpan.textContent = input.value;
  editButton.textContent = 'Ändern';
  removeButton.textContent = 'Entfernen';

  ul.appendChild(newTask);
  newTask.appendChild(taskSpan);
  newTask.appendChild(editButton);
  newTask.appendChild(removeButton);

  input.value = '';

  removeButton.addEventListener('click', function () {
    ul.removeChild(newTask);
  });

  editButton.addEventListener('click', function () {
    const newInput = document.createElement('input');
    const saveButton = document.createElement('button');

    newInput.value = taskSpan.textContent;
    saveButton.textContent = 'Speichern';

    newTask.insertBefore(newInput, taskSpan);
    newTask.insertBefore(saveButton, taskSpan);
    newTask.removeChild(taskSpan);
    newTask.removeChild(editButton);
    newTask.removeChild(removeButton);

    saveButton.addEventListener('click', function () {
      taskSpan.textContent = newInput.value;
      newTask.insertBefore(taskSpan, newInput);
      newTask.insertBefore(editButton, newInput);
      newTask.insertBefore(removeButton, newInput);
      newTask.removeChild(newInput);
      newTask.removeChild(saveButton);
    });
  });
});