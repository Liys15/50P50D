const formEl = document.querySelector('#form')
const inputEl = document.querySelector('#input')
const todosUl = document.querySelector('#todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addNewTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addNewTodo()
})

function addNewTodo(todo) {
    const todoText = todo ? todo.text : inputEl.value

    if (todoText) {
        const todoEl = document.createElement('li')
        todoEl.innerHTML = todoText
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUl.appendChild(todoEl)

        updateLS()

        inputEl.value = ''
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('.todos li')
    const todos = [] // const数组变量是可以push的,因为变量实际上是内存指针
        // 操作nodelistz对象，将每个node的成员值组成新数组
    todosEl.forEach(todo => {
        console.log(todo)
        todos.push({
            text: todo.innerHTML,
            completed: todo.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}