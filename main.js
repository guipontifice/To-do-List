const titleText = document.querySelector('.title-card');
const buttonAdd = document.querySelector('.add-button');
const todoInput = document.querySelector('.todo-card');
const image = document.querySelector('.image-class');
const getNewTask = document.querySelector('.new-item')


buttonAdd.addEventListener('click', addNewTask)

let itemList = [];

function addNewTask(event) {
    event.preventDefault();

    itemList.push(titleText.value);
    if(titleText.value) {
        showTasks();
    
    }};

function showTasks() {
    const createDiv = document.createElement('div');
    createDiv.classList.add('new-item')
    
    const todoTitle = document.createElement('p');
    todoTitle.classList.add('item-text')
    todoTitle.textContent = itemList[itemList.length - 1];
    createDiv.appendChild(todoTitle)

    const trashImg = document.createElement('img');
    trashImg.classList.add('image-class');
    trashImg.src ="/To-Do-List/img/trash.png";
    createDiv.appendChild(trashImg);
    todoInput.appendChild(createDiv);

    titleText.value = ''
    titleText.focus();
    
    trashImg.addEventListener('click', () => {
        createDiv.remove();
    });
}
    



