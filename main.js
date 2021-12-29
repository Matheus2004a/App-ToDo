const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    checkTask()
})

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
        totalTasks.innerHTML = `Você tem ${listTasks.length} tarefa(s) pendente(s)`
        console.log(listTasks)
    }
}

function createTask() {
    let ul = document.querySelector("ul")
    let itemTask = document.createElement("li")
    let buttonDeleteTask = document.createElement("button")
    let input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    buttonDeleteTask.innerHTML = "<i class='fas fa-trash icon-trash'></i>"

    itemTask.appendChild(input)
    itemTask.appendChild(document.createTextNode(taskType.value))
    itemTask.appendChild(buttonDeleteTask)
    ul.appendChild(itemTask)
    
    taskType.value = ""

    input.addEventListener("change", () => {
        itemTask.classList.toggle("done")
        removeOrFinishTask()
    })

    buttonDeleteTask.addEventListener("click", () => {
        itemTask.classList.add("delete")
        removeOrFinishTask()
    })

    function removeOrFinishTask() {
        listTasks.pop()
        totalTasks.innerHTML = `Você tem ${listTasks.length} tarefa(s) pendente(s)`
    }
}

const buttonSendTask = document.querySelector(".btn-send-task")
buttonSendTask.addEventListener("click", checkTask)