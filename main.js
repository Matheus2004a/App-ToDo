const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
})

const buttonSendTask = document.querySelector(".btn-send-task")
buttonSendTask.onclick = () => checkTask()

let listTasks = []

const buttonClearAllTask = document.querySelector(".btn-clear-all-task")
buttonClearAllTask.onclick = () => {
    listTasks.length = 0
    removeErrorTask()
    const lists = document.querySelectorAll("li")
    lists.forEach(list => list.style.display = "none")
    focusInputTask()
}

let ul = document.querySelector("ul")

function taskInList(task, list) {
    const taskLower = task.trim().toLowerCase()
    const taskIsNotInList = list.indexOf(taskLower) !== -1

    if (taskIsNotInList) {
        return true
    } else {
        list.push(taskLower)
        return false
    }
}

function focusInputTask() {
    task.focus()
}

const task = document.querySelector("#task-type")
window.onload = () => focusInputTask()
let messageError = document.createElement("p")

function checkTask() {
    if (task.value === "" || taskInList(task.value, listTasks)) {
        messageError.innerHTML = "<font color='#ff0000'>Tarefa inválida ou já cadastrada na lista</font>"
    } else {
        removeErrorTask()
        focusInputTask()
        createTask()
    }

    form.appendChild(messageError)
    task.value = ""

    function createTask() {
        const itemTask = document.createElement("li")
        itemTask.innerHTML = `<input type='checkbox'>
        ${task.value}
        <button>
            <i class='fas fa-trash icon-trash'></i>
        </button>`

        const buttonDeleteTask = itemTask.querySelector("button")
        const input = itemTask.querySelector("input")

        ul.appendChild(itemTask)

        input.onchange = () => {
            removeTask()
            itemTask.classList.toggle("done")
            focusInputTask()
        }

        buttonDeleteTask.onclick = () => {
            removeTask()
            itemTask.style.display = "none"
            focusInputTask()
        }

        function removeTask() {
            const removeTaskSpecific = listTasks.indexOf(itemTask.value)
            listTasks.splice(removeTaskSpecific, 1)

            if (listTasks.length === 0) focusInputTask()
        }
    }
}

function removeErrorTask() {
    messageError.innerHTML = ""
}