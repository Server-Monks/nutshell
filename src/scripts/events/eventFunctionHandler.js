import eventsToDom from "./eventsDomHandler"
import newEventForm from "./eventsFormHandler"
import createEvent from "./eventsHtmlComponent"

const activateEvents = () => {
    eventsToDom(newEventForm())
    eventsToDom(createEvent("walk the dog", "nashville", "december"))
}

export default activateEvents
