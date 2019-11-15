/* ((((author: Caroline Brownlee)))) */
import API from "./eventsApiHandler"
import eventsToDomFunctions from "./eventsDomHandler"
import editForm from "./eventsEditFormHandler"


// ||| *** FUNCTIONALITY TO POST A NEW EVENT *** |||

// Factory function that creates a new event by taking variables above as arguments and reading their values. Structured to save to database.json.
const createEvent = (name, date, location) => {
    return {
        "name": name.value,
        "date": date.value,
        "location": location.value
    }
}

const submit = {
    // Function that captures submit button on newEventForm() and saves a new event to database.json.
    submitFunction() {
        const newEventSubmitButton = document.querySelector("#newEventSubmitBTN")
        newEventSubmitButton.addEventListener("click", () => {
            // Grabs the id's on the inputs in the newEventForm() and stores them in a variable
            const name = document.querySelector("#eventName")
            const date = document.querySelector("#eventDate")
            const location = document.querySelector("#eventLocation")
            // Invokes the createEvent function to save input fields to database.json and stores it in a variable
            const eventObject = createEvent(name, date, location)
            // IF Submitting a NEW event, the hiddenId will be empty (no value)
            const hiddenId = document.querySelector("#hiddenId").value
            if (hiddenId === "") {
                // Performs a POST event to save the new event to the database, taking eventObject variable from above as an argument
                API.saveNewEvent(eventObject).then(eventsToDomFunctions.getAllEventsToDom)
                    // And clears the input fields
                    name.value = ""
                    date.value = ""
                    location.value = ""
            } else {
                // ELSE, IF EDITING, the hiddenId value will NOT be empty
                if (hiddenId !== "") {
                    // Grabs the id on the Event List Container
                    const eventListContainer = document.querySelector("#eventsListContainer")
                    // Clears the container
                    eventListContainer.innerHTML = ""
                    // Performs the PUT event, taking the hiddenId on the object and the eventObject varible from above as arguments, renders all events to the dom, and clears the input fields
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
    // // Function that captures delete and edit buttons in eventListContainer and performs delete, or GETS a single event to edit to populate into the form fields
    deleteAndEditEventFunction() {
        const eventListContainer = document.querySelector("#eventsListContainer")
        eventListContainer.addEventListener("click", () => {
            // caputures delete button
            if (event.target.id.startsWith("deleteEvent--")) {
                // takes the id on the button ("deleteEvent--${event.id}"), splits it after the dashes, stores each part into an array of two items, and with [1], grabs just ${event.id} and stores it into a variable
                const eventToDelete = event.target.id.split("--")[1]
                // performs DELETE event, taking the eventToDelete variable as an argument, then renders events to the dom
                API.deleteEvent(eventToDelete).then(eventsToDomFunctions.getAllEventsToDom)
            } else {
                // captures edit button
                if (event.target.id.startsWith("editEvent--")) {
                    // takes the id on the button ("editEvent--${event.id}"), splits it after the dashes, stores each part into an array of two items, and with [1], grabs just ${event.id} and stores it into a variable
                    const eventToEdit = event.target.id.split("--")[1]
                    // clears the eventListContainer
                    eventListContainer.innerHTML = ""
                    // gets a Single Event from the database, taking the variable above as an argument, then renders the editForm while filling in the values of that particular event into the input fields for editing. SUBMIT FUNCTIONALITY TO SAVE EDIT IN submitFunction() ABOVE.
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