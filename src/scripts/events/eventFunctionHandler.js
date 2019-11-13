import eventsToDom from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import submit from "./eventsEventListeners"

const activateEvents = () => {
    const mainContainer = document.querySelector("#eventsContainer")
    mainContainer.innerHTML = ""
    eventsToDom(newEventForm())
    submit.submitFunction()
}

export default activateEvents