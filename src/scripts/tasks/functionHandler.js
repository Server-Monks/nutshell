import eventsToDom from "./DomHandler"
import newEventForm from "./FormHandler"
import createEvent from "./HtmlComponent"

const activateEvents = () => {
    const taskContainer = document.querySelector("#taskContainer")
    taskContainer.innerHTML = ""