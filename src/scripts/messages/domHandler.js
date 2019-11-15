import messageManager from "./domComponents.js"
import doThaThang from "./eventHandler.js"

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

    doThaThang.attachSaveEvent()
  }
}

export default renderDom