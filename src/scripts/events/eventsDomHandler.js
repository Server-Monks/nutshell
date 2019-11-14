import makeEventComponent from "./eventsHtmlComponent"
import API from "./eventsApiHandler"

const eventsToDomFunctions = {
    
    getAllEventsToDom() {
        API.getAllEvents().then(parsedEvents => {
            // iterates over the array in the database, and for each entry,
            parsedEvents.forEach(event => {
                // invokes makeJournalEntryComponent, taking each key and its value as an argument, and stores the returned string in a variable.
                const eventHtml = makeEventComponent(event)
                // Finally, the function is invoked that takes the above variable as an argument and puts each entry on the dom.
                const eventsListContainer = document.querySelector("#eventsListContainer")
                eventsListContainer.innerHTML += eventHtml
            })
        })
    },
    eventsToDom(event) {
        const eventsFormContainer = document.querySelector("#eventsFormContainer")
        eventsFormContainer.innerHTML += event
    }

}

export default eventsToDomFunctions