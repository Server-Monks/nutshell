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

  deleteMessage(messageCardId) {
    return fetch(`${URL}/${messageCardId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  },

  updateFormFields(messageCardId) {
    return fetch(`${URL}/${messageCardId}`)
      .then(response => response.json())
      .then(messageCard => {
        hiddenMessageId.value = messageCard.id
        messageInput.value = messageCard.message
      })
  },

  editCard(messageCardId) {
    return fetch(`${URL}/${messageCardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObject)
    })
      .then(res => res.json())
      .then(() => {
      })

  }

}

export default API