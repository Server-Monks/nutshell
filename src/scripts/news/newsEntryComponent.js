



const entryManager = {

  makeArticleEntryComponent(articleEntry) {
    // Create your own HTML structure for a journal entry
    return `
        <section id=journalEntries>
          <p>${articleEntry.title}</p>
          <p>${articleEntry.url}</p>
          <p>${articleEntry.synopsis}</p>
          <p>${articleEntry.date}</p>
          
        </section>
        <button id="deleteButton--${articleEntry.id}">  
      Delete Button
        </button>
        `
  },  // created a factory function for the object of creating a journal.
  createArticleObj(title, url, synopsis, date) {
    return {
      "title": title,
      "url": url,
      "synopsis": synopsis,
      "date": date,
    }
  }
}


export default entryManager