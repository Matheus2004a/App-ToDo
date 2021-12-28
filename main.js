const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    checkTask()
})

// Id para posteriormente excluir a tarefa
function idGenerator() {
    let timeCreateTask = new Date()
    let id = timeCreateTask.getHours() + timeCreateTask.getMinutes() + timeCreateTask.getSeconds() + timeCreateTask.getMilliseconds()
    return id
}

let listTasks = []

const messageTasks = document.querySelector(".message-tasks")
const taskType = document.querySelector("#task-type")
let totalTasks = document.querySelector(".total-tasks")
let messageError = document.createElement("p")

function checkTask() {
    if (taskType.value === "") {
        messageError.innerHTML = "<font color='#ff0000'>Digite uma tarefa</font>"
        form.appendChild(messageError)
    } else {
        messageError.innerHTML = ""
        listTasks.push(taskType.value)
        taskType.focus()
        createTask()
        totalTasks.innerHTML = `Você tem ${listTasks.length} tarefa(s) pendentes`
        console.log(listTasks)
    }
}

function createTask() {
    /* let task = {
        id: idGenerator(),
        description: taskType.value
    } */
    let ul = document.querySelector("ul")
    let itemTask = document.createElement("li")
    let icon = document.createElement("i")
    let input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    icon.setAttribute("class", "fas fa-trash icon-trash")

    itemTask.appendChild(input)
    itemTask.appendChild(document.createTextNode(taskType.value))
    itemTask.appendChild(icon)
    ul.appendChild(itemTask)
    taskType.value = ""

    itemTask.classList.toggle("task")
    messageTasks.appendChild(ul)
}

const buttonSendTask = document.querySelector(".btn-send-task")
buttonSendTask.addEventListener("click", checkTask)