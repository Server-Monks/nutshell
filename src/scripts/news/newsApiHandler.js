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
  },
  deleteEntry(id) {                                                     //function for deleting a single entry
    return fetch(`http://localhost:8088/news/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
  },
}





export default API