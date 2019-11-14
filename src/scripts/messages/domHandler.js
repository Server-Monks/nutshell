import messageManager from "./domComponents.js"

const renderDom = {
  renderMessages(messages) {
    
    const renderMessageContainer = document.querySelector("#messageContainer")
    renderMessageContainer.innerHTML = messageManager.makeMessageContainer()

    let htmlForAllMessages = ""
    messages.forEach(message => {
      const messageHtml = messageManager.makeMessageComponent(message)
      htmlForAllMessages += messageHtml
    })

    const logArticle = document.querySelector("#insertMessagesHere")
    logArticle.innerHTML = htmlForAllMessages
  }
}

export default renderDom