import API from "./eventsApiHandler"
// import makeEventComponent from "./eventsHtmlComponent"
import eventsToDomFunctions from "./eventsDomHandler"
import editForm from "./eventsEditFormHandler"

// ||| *** FUNCTIONALITY TO POST A NEW EVENT *** |||

// Grabs the id's on the inputs in the newEventForm() and stores them in a variable

// Factory function that creates a new event by taking variables above as arguments and reading their values. Structured to save to database.json.
const createEvent = (name, date, location) => {
    return {
        "name": name.value,
        "date": date.value,
        "location": location.value
    }
}

// Function that captures submit button on newEventForm() and saves a new event to database.json.
const submit = {
    submitFunction() {
        const newEventSubmitButton = document.querySelector("#newEventSubmitBTN")
        newEventSubmitButton.addEventListener("click", () => {
            const name = document.querySelector("#eventName")
            const date = document.querySelector("#eventDate")
            const location = document.querySelector("#eventLocation")
            const eventObject = createEvent(name, date, location)
            const hiddenId = document.querySelector("#hiddenId").value
            if (hiddenId === "") {
                API.saveNewEvent(eventObject).then(eventsToDomFunctions.getAllEventsToDom)
                    name.value = ""
                    date.value = ""
                    location.value = ""
            } else {
                if (hiddenId !== "") {
                    const eventListContainer = document.querySelector("#eventsListContainer")
                    eventListContainer.innerHTML = ""
                    API.editEvent(hiddenId, eventObject)
                        .then(eventsToDomFunctions.getAllEventsToDom)
                        .then(() => {
                            name.value = ""
                            date.value = ""
                            location.value = ""
                        })
                }
            }
        })
    },
    deleteAndEditEventFunction() {
        const eventListContainer = document.querySelector("#eventsListContainer")
        eventListContainer.addEventListener("click", () => {
            if (event.target.id.startsWith("deleteEvent--")) {
                const eventToDelete = event.target.id.split("--")[1]
                API.deleteEvent(eventToDelete).then(eventsToDomFunctions.getAllEventsToDom)
            } else {
                if (event.target.id.startsWith("editEvent--")) {
                    const eventToEdit = event.target.id.split("--")[1]
                    eventListContainer.innerHTML = ""
                    API.getSingleEvent(eventToEdit)
                        .then(event => {
                            editForm(event)
                            document.querySelector("#hiddenId").value = event.id,
                            document.querySelector("#eventName").value = event.name,
                            document.querySelector("#eventDate").value = event.date,
                            document.querySelector("#eventLocation").value = event.location
                        })
                }
            }
        })
    }
}


export default submit