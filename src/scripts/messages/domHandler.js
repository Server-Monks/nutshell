import messageManager from "./domComponents.js"

const renderDom = {
    renderMessages(messages) {
      let htmlForAllMessages = ""
      messages.forEach(message => {
        const messageHtml = messageManager.makeMessageComponent(message)
        htmlForAllMessages += messageHtml
      })
      const logArticle = document.querySelector("#messageListContainer")
      logArticle.innerHTML = htmlForAllMessages
    },

    renderNewMessageForm() {
      const renderNewMessageForm = document.querySelector("#messageContainer")
      renderNewMessageForm.innerHTML += messageManager.makeMessageFormContainer()

      
    }

  }

export default renderDom