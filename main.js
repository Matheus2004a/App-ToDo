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
}

let ul = document.querySelector("ul")

function taskInList(task, list) {
    list.indexOf(task) !== -1 ? true : false
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
        form.appendChild(messageError)
    } else {
        removeErrorTask()
        listTasks.push(task)
        focusInputTask()
        createTask()
    }
    task.value = ""

    function createTask() {
        const itemTask = document.createElement("li")
        const buttonDeleteTask = document.createElement("button")
        const input = document.createElement("input")
        input.type = "checkbox"
        buttonDeleteTask.innerHTML = "<i class='fas fa-trash icon-trash'></i>"

        itemTask.appendChild(input)
        itemTask.appendChild(document.createTextNode(task.value))
        itemTask.appendChild(buttonDeleteTask)
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
        }
    }
}

function removeErrorTask() {
    messageError.innerHTML = ""
}