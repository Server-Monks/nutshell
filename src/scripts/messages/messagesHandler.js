/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderDom from "./domHandler.js"

import API from "./apiHandler.js"



const newMessage = (text) => {
    return {
        "message": text
    }
}
const saveObject = {
    attachSaveEvent() {

        const messageInputButton = document.querySelector("#submitButton")
        messageInputButton.addEventListener("click", () => {
            let textInput = document.querySelector("#exampleFormControlTextarea1").value
            const messageObject = newMessage(textInput)
            messageObject.userId = sessionStorage.getItem("activeUser")
            API.postMessages(messageObject)
                .then(API.getMessages)
                .then(renderDom.renderMessages)
        })
    }
}

export default saveObject