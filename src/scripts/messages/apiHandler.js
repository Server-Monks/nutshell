let URL = "http://localhost:8088/messages"

let API = {

  getMessages() {
    return fetch(`${URL}`)
      .then(response => response.json())
  },

  // Use `fetch` with the POST method to add your entry to your API
  postMessages(newMessage) {
    return fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    })
  },

  deleteMessage(cardId) {
    return fetch(`${URL}/${cardId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  },

  updateFormFields(cardId) {

    // Get reference to input fields in the form
    const hiddenMessageId = document.querySelector("#messageId")
    const messageInput = document.querySelector("#messageBody")

    return fetch(`${URL}/${cardId}`)
      .then(response => response.json())
      .then(message => {
        /*
            Now that you KNOW you have the data, render
            an editing form that represents the current
            state of the resource.
        */
        hiddenMessageId.value = message.id // Hidden value. User no see. 🙈
        messageInput.value = message.body
      })
  },

  editCard(cardId) {
    const updatedObject = {
      messageID: document.querySelector("#messageId").value,
      message: document.querySelector("#messageBody").value
    }

    // Logic for the PUT operation
    return fetch(`${URL}/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObject)
    })
      .then(res => res.json())
      .then(() => {
        /*
            Since this is the point in the code where you KNOW
            the operation completed successfully, clear the
            value of the hidden input field to that your
            application is back to the state of creating instead
            of editing
        */
        document.querySelector("#messageId").value = ""
      })

  }

}

export default API