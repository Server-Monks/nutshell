import eventsToDomFunctions from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import submit from "./eventsEventListeners"

const activateEvents = () => {
    eventsToDomFunctions.eventsToDom(newEventForm())
    submit.submitFunction()
    submit.deleteAndEditEventFunction()
}

export default activateEvents