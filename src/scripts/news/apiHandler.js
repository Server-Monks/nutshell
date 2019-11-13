const API = {
    getArticleEntries() {
      return fetch("http://localhost:8080/news")
        .then(response => response.json())
    },