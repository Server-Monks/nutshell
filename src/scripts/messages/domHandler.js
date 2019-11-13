import messageManager from "./domComponents.js"

const renderDom = {
    renderMessages(messages) {
      let htmlForAllMessages = ""
      messages.forEach(message => {
        const messageHtml = messageManager.makeMessageComponent(message)
        htmlForAllMessages += messageHtml
      })
      const logArticle = document.querySelector("#messageContainer")
      logArticle.innerHTML = htmlForAllMessages
    }

  }

export default renderDom