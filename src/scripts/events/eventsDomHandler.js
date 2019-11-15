/* ((((author: Caroline Brownlee)))) */
import makeEventComponent from "./eventsHtmlComponent"
import API from "./eventsApiHandler"


const eventsToDomFunctions = {
    // function that gets all events to the dom
    getAllEventsToDom() {
        API.getAllEvents().then(parsedEvents => {
            // grabs the id on the eventListContainer and stores it into a variable
            const eventsListContainer = document.querySelector("#eventsListContainer")
            // clears the eventsListContainer
            eventsListContainer.innerHTML = ""
            // iterates over the array in the database, and for each event,
            parsedEvents.forEach(event => {
                // invokes makeEventComponent, taking each event as an argument, stores it into a variable
                const eventHtml = makeEventComponent(event)
                // takes each event stored in eventHtml and sticks it in the eventsListContainer
                eventsListContainer.innerHTML += eventHtml
            })
        })
    },
    // function that takes an event as an argument
    eventsToDom(event) {
        // grabs the id on eventsFormContainer
        const eventsFormContainer = document.querySelector("#eventsFormContainer")
        // and renders that event to the dom
        eventsFormContainer.innerHTML = event
    }

}

export default eventsToDomFunctions