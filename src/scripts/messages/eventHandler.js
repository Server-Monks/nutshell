import API from "./apiHandler"
import renderDom from "./domHandler"

const messageLog = document.querySelector("#container")
const doThaThang = {
    registerDeleteListener() {
        messageLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteCard--")) {
                // Extract message id from the button's id attribute
                const messageCardToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all messages and render them
                API.deleteMessage(messageCardToDelete)
                    .then(API.getMessages)
                    .then(messages => renderDom.renderMessages(messages))
            }
        })
    },

    registerEditListener() {
        messageLog.addEventListener("click", event => {

            if (event.target.id.startsWith("editCard--")) {

                const messageIdToEdit = event.target.id.split("--")[1]

                /*
                    This function will get the message from the API
                    and populate the form fields (see below)
                */
                API.updateFormFields(messageIdToEdit)
                    .then(API.getMessages)
                    .then(messages => renderDom.renderMessages(messages))
            }
        })
    },

    registerSaveListener() {
        let saveButton = document.querySelector("#saveButton")
        saveButton.addEventListener("click", () => {
            const hiddenMessageId = document.querySelector("#messageId").value
        if (hiddenMessageId !== "") {
                API.editCard(hiddenMessageId)
                    .then(API.getMessages)
                    .then(messages => renderDom.renderMessages(messages))
            }
        })
    }
}

export default doThaThang