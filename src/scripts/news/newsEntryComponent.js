



const entryManager = {

    makeArticleEntryComponent(articleEntry) {
        // Create your own HTML structure for a journal entry
        return `
        <section id=journalEntries>
          <h3>${articleEntry.title}</h3>
          <p>${articleEntry.description}</p>
        </section>
        
       
      `
    },  // created a factory function for the object of creating a journal.
    createArticleObj(title, description) {
        return {
            "title": title,
            "description": description,
        }
    }
}


export default entryManager