import eventsToDom from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import createEvent from "./eventsHtmlComponent"
import submitFunction from "./eventsEventListeners"

const activateEvents = () => {
    const mainContainer = document.querySelector("#container")
    mainContainer.innerHTML = ""
    eventsToDom(newEventForm())
    eventsToDom(createEvent("walk the dog", "today", "nashville"))
    submitFunction()
}

// Fetch call that gets the data for all entries,
const getAllEventsToDom = () => {
    API.getAllEvents().then(parsedEvents => {
        entriesContainer.innerHTML = ""
        // iterates over the array in the database, and for each entry, 
        parsedEvents.forEach(event => {
            // invokes makeJournalEntryComponent, taking each key and its value as an argument, and stores the returned string in a variable.
            const eventHtml = create(entry)
            // Finally, the function is invoked that takes the above variable as an argument and puts each entry on the dom.
            entryToDom(journalHtml)
        })
    })
}
getAllJournalEntriesToDom()

export default activateEvents
