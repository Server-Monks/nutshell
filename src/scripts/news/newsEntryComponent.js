


const entryManager = {

    makeJournalEntryComponent(articleEntry) {
        // Create your own HTML structure for a journal entry
        return `
        <section id=journalEntries>
          <h3>${articleEntry.title}</h3>
          <p>${articleEntry.description}</p>
        </section>
       
      `
    },  // created a factory function for the object of creating a journal.
    createArticleObj(date, concept, entry, mood) {
        return {
            "title": title,
            "description": description,
        }
    }
}


