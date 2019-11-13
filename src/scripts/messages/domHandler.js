import messageManager from "./domComponents.js"

const renderDom = {
    renderMessages(messages) {
      let HtmlForAllMessages = ""
      messages.forEach(message => {
        const entryHtml = messageManager.makeMessageComponent(message)
        HtmlForAllMessages += entryHtml
      })
      const logArticle = document.querySelector("#container")
      logArticle.innerHTML = HtmlForAllMessages
    }
  }

export default renderDom