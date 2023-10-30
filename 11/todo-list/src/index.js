const input = document.querySelector('.task-input__control');
const btn = document.querySelector('.task-input__button');

btn.addEventListener('click', addList);

input.addEventListener('keyup', (e) => {
    return e.keyCode === 13 ? addList(e) : null;
})

function addList() {
    const notCompletedList = document.querySelector('.task-list--uncompleted');
    const completedList = document.querySelector('.task-list--completed');

    const newLi = createListItem();
    const checkBtn = createTaskActionButton();
    const delBtn = createTaskActionButton();

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value) {
        newLi.textContent = input.value;
        input.value = '';
        notCompletedList.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        completedList.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}

function createListItem() {
    const result = document.createElement('li');
    result.classList.add('task-list__item');
    result.classList.add('task');

    return result;
}

function createTaskActionButton() {
    const result = document.createElement('button');
    result.classList.add('task__action');

    return result;
}
