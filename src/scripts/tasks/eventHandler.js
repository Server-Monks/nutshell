import API from "./apiHandler"
import renderDom from "./domHandler"

const taskLog = document.querySelector("#taskContainer")

const taskEventListeners = {
    registerDeleteListener() {
        taskLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteTaskCard--")) {
                // Extract message id from the button's id attribute
                const taskCardToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all messages and render them
                API.deleteTask(taskCardToDelete)
                    .then(API.getTasks)
                    .then(tasks => renderDom.renderTasks(tasks))
            }
        })
    },

    registerEditListener() {
        taskLog.addEventListener("click", event => {

            if (event.target.id.startsWith("editTaskCard--")) {

                const taskIdToEdit = event.target.id.split("--")[1]

                /*
                    This function will get the message from the API
                    and populate the form fields (see below
                */
                API.updateFormFields(taskIdToEdit)
                    .then(API.getTasks)
                    .then(tasks => renderDom.renderTasks(tasks))
            }
        })
    },

    registerAddListener() {
        let addButton = document.querySelector("#add-task-button")
        addButton.addEventListener("click", event => {
            // console.log("click")
            // const hiddenTaskId = document.querySelector("#taskId").value
        // if (hiddenTaskId !== "")
        //  {
        //         API.editCard(hiddenTaskId)
        //             .then(API.getTasks)
        //             .then(tasks => renderDom.renderTasks(tasks))
        //     }
        })
    }
}

export default taskEventListeners
