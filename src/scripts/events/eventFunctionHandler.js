import eventsToDom from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import submit from "./eventsEventListeners"
import API from "./eventsApiHandler"
import makeEventComponent from "./eventsHtmlComponent"

// Fetch call that gets the data for all events,

const eventsFunctions = {

    // getAllEventsToDom() {
    //     API.getAllEvents().then(parsedEvents => {
    //         // iterates over the array in the database, and for each entry,
    //         parsedEvents.forEach(event => {
    //             // invokes makeJournalEntryComponent, taking each key and its value as an argument, and stores the returned string in a variable.
    //             const eventHtml = makeEventComponent(event)
    //             // Finally, the function is invoked that takes the above variable as an argument and puts each entry on the dom.
    //             eventsToDom(eventHtml)
    //         })
    //     })
    // },
    activateEvents() {
        const mainContainer = document.querySelector("#container")
        mainContainer.innerHTML = ""
        eventsToDom(newEventForm())
        submit.submitFunction()
    }
}



export default eventsFunctions