import API from "./apiHandler"
import renderDom from "./domHandler"

const messageLog = document.querySelector("#messageContainer")

const newMessage = (text, time) => {
    return {
        "message": text,
        "time": time
    }
}

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

    registerSaveEditListener() {
        let saveButton = document.querySelector("#saveButton")
        saveButton.addEventListener("click", () => {
            const hiddenMessageId = document.querySelector("#messageId").value
        if (hiddenMessageId !== "") {
                API.editCard(hiddenMessageId)
                    .then(API.getMessages)
                    .then(messages => renderDom.renderMessages(messages))
            }
        })
    },

    attachSaveEvent() {
        const messageInputButton = document.querySelector("#submitButton")
        messageInputButton.addEventListener("click", () => {
            const textInput = document.querySelector("#exampleFormControlTextarea1").value
            const messageObject = newMessage(textInput)
            
            messageObject.userId = parseInt(sessionStorage.getItem("activeUser"))
            API.postMessages(messageObject)
                .then(API.getMessages)
                .then(renderDom.renderMessages)
        })
    }
}

export default doThaThang