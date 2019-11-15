/* ((((author: Caroline Brownlee)))) */
import eventsToDomFunctions from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import submit from "./eventsEventListeners"

// Function that is called in main.js that invokes functions to
const activateEvents = () => {
    // put the newEventForm on the dom
    eventsToDomFunctions.eventsToDom(newEventForm())
    // capture events on submit button on newEventForm
    submit.submitFunction()
    // capture events on delete and edit buttons in eventListContainer
    submit.deleteAndEditEventFunction()
}

export default activateEvents