const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
})

const buttonSendTask = document.querySelector(".btn-send-task")
buttonSendTask.addEventListener("click", checkTask)

let listTasks = []

const buttonClearAllTask = document.querySelector(".btn-clear-all-task")
buttonClearAllTask.addEventListener("click", () => {
    listTasks.length = 0
    const AllLi = document.querySelectorAll("li")
    AllLi.forEach(element => {
        element.style.display = "none"
    })
})

let ul = document.querySelector("ul")

function taskInList(task, list) {
    if (list.indexOf(task) !== -1) {
        return true
    } else {
        return false
    }
}

const taskType = document.querySelector("#task-type")
let messageError = document.createElement("p")

function checkTask() {
    if (taskType.value === "" || taskInList(taskType.value, listTasks)) {
        messageError.innerHTML = "<font color='#ff0000'>Tarefa inválida ou já cadastrada na lista</font>"
        form.appendChild(messageError)
    } else {
        messageError.innerHTML = ""
        listTasks.push(taskType.value)
        taskType.focus()
        createTask()
        console.log(listTasks)
    }
    taskType.value = ""

    function createTask() {
        let itemTask = document.createElement("li")
        let buttonDeleteTask = document.createElement("button")
        let input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        buttonDeleteTask.innerHTML = "<i class='fas fa-trash icon-trash'></i>"

        itemTask.appendChild(input)
        itemTask.appendChild(document.createTextNode(taskType.value))
        itemTask.appendChild(buttonDeleteTask)
        ul.appendChild(itemTask)

        input.addEventListener("change", () => {
            itemTask.classList.toggle("done")
            removeTask()
        })

        buttonDeleteTask.addEventListener("click", () => {
            itemTask.style.display = "none"
            removeTask()
        })

        function removeTask() {
            listTasks.pop()
        }
    }
}