const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if(!input.value.trim()){
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButton = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')
        divButton.setAttribute('class', 'div_button')

        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'
        text.innerHTML = input.value

        divButton.append(deleteButton, editButton)
        div.append(text, divButton)
        todoList.prepend(div)
        deleteButton.onclick = () => div.remove()
        editButton.addEventListener('click', ()=>{
            const newText = prompt( `edit ${text.textContent}`, text.textContent).trim()
            newText === '' ? text.innerHTML : (text.innerHTML = newText);
        });
    }
}


createButton.onclick = () => {
    createTodo()
    input.value = ''
}