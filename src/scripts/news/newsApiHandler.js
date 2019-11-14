import registerEventListener from "./newsEventListeners.js"


const API = {
  getArticleEntries() {
    return fetch("http://localhost:8088/news")
      .then(response => response.json())
    },

  postEntry(newArticleEntry) {
    return fetch("http://localhost:8088/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticleEntry)
    })
  }
}





export default API