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
        totalTasks.innerHTML = `Você tem ${listTasks.length} tarefa(s) pendentes`
        console.log(listTasks)
    }
}

function createTask() {
    let ul = document.querySelector("ul")
    let list = document.createElement("li")
    list.innerHTML += `<input type='checkbox' class='check-task'> ${taskType.value} <i class="fas fa-trash icon-trash"></i>`
    let checkTasks = document.querySelectorAll(".check-task")
    let icons = document.querySelectorAll(".icon-trash")
    ul.appendChild(list)

    checkTasks.forEach(task => {
        task.addEventListener("click", () => {
            list.classList.toggle("done")
        })
        icons.forEach(icon => {
            icon.addEventListener("click", () => {
                list.classList.add("delete")
                console.log(listTasks)
            })
        })
    })

    taskType.value = ""

    function removeOrFinishTask() {
        listTasks.pop()
        list.classList.add("delete")
        totalTasks.innerHTML = `Você tem ${listTasks.length} tarefa(s) pendentes`
    }
}

const buttonSendTask = document.querySelector(".btn-send-task")
buttonSendTask.addEventListener("click", checkTask)