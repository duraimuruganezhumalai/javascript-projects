let form = document.forms.todotasklistForm;
let taskInputField = document.querySelector('.taskInput')
let taskListItems = document.querySelector('.taskListItems')
let taskSubmitButton = document.querySelector('.task-submit-button')
let error = document.querySelector('.error')

let editElement = null;

document.addEventListener("DOMContentLoaded", () => {

    let getTaskItem = JSON.parse(localStorage.getItem('task'))
    console.log("getTaskItem", getTaskItem);

    getTaskItem.forEach(({ task, completed }) => {
        addTask(task, completed);
    })

})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form)
    let taskInput = formData.get('taskinputValue').trim();
    console.log('taskInput', taskInput);

    !taskInput
        ? (error.textContent = 'Task cannot be empty')
        : (error.textContent = '', form.reset(), saveTaskLocalstorage(), editElement ? updateTask(taskInput) : addTask(taskInput))


})

function addTask(taskInput, completed = false) {

    let li = document.createElement('li')
    li.innerHTML = `
    <input type="checkbox" class="task-checkbox" ${completed ? 'checked' : ''}>
    <span class="task-input ${completed ? "completed" : ''}">${taskInput}</span>
    <button class="task-edit">Edit</button>
    <button class="task-delete">Delete</button>
    `;

    let taskCheckbox = li.querySelector('.task-checkbox')
    taskCheckbox.addEventListener('change', (e) => {
        let taskTextbox = li.querySelector('.task-input')
        taskTextbox.classList.toggle('completed', e.target.checked)
        saveTaskLocalstorage();
    })

    let editTaskBtn = li.querySelector('.task-edit')
    editTaskBtn.addEventListener('click', () => {
        console.log("edit clicked");
        editTaskButton(li)
    })


    let deleteTask = li.querySelector('.task-delete')
    deleteTask.addEventListener('click', () => {
        li.remove();
        saveTaskLocalstorage();
    })

    taskListItems.appendChild(li)
}
function editTaskButton(li) {
    console.log("li", li);
    editElement = li;
    taskInputField.value = li.querySelector('.task-input').textContent;
    taskSubmitButton.textContent = 'Update a Task';
}

function updateTask(newInput) {

    if (editElement) {
        editElement.querySelector('.task-input').textContent = newInput;
        taskSubmitButton.textContent = 'Add a Task';
        editElement = null;
        saveTaskLocalstorage();
    }
}

function saveTaskLocalstorage() {
    console.log("ul li", [...taskListItems.children]);

    let tasksItem = [...taskListItems.children].map(li => ({
        task: li.querySelector('.task-input').textContent,
        completed: li.querySelector('.task-checkbox').checked
    }));
    localStorage.setItem('task', JSON.stringify(tasksItem))
}