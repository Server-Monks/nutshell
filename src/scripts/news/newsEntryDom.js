import entryManager from "./newsEntryComponent.js"





const renderDom = {
    renderArticleEntries(entries) {
      let HtmlForAllEntries = ""
      entries.forEach(entry => {
        const entryHtml = entryManager.makeArticleEntryComponent(entry)
        HtmlForAllEntries += entryHtml
      })
      const logArticle = document.querySelector("#entryLog")
      logArticle.innerHTML = HtmlForAllEntries
    
    }
  }

  

  export default renderDom