import API from "./eventsApiHandler"
import makeEventComponent from "./eventsHtmlComponent"
import eventsToDom from "./eventsDomHandler"


// ||| *** FUNCTIONALITY TO GET ALL EVENTS TO DOM *** |||

const getAllEventsToDom = () => {
    API.getAllEvents().then(parsedEvents => {
        // iterates over the array in the database, and for each entry,
        parsedEvents.forEach(event => {
            // invokes makeJournalEntryComponent, taking each key and its value as an argument, and stores the returned string in a variable.
            const eventHtml = makeEventComponent(event)
            // Finally, the function is invoked that takes the above variable as an argument and puts each entry on the dom.
            eventsToDom(eventHtml)
        })
    })
}

// ||| *** FUNCTIONALITY TO POST A NEW EVENT *** |||

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
        console.log(newEventSubmitButton)
        newEventSubmitButton.addEventListener("click", () => {
            // event.preventDefault()
            console.log(event)
            // Grabs the id's on the inputs in the newEventForm() and stores them in a variable
            const name = document.querySelector("#eventName")
            const date = document.querySelector("#eventDate")
            const location = document.querySelector("#eventLocation")
            const eventObject = createEvent(name, date, location)
            console.log(eventObject)
            API.saveNewEvent(eventObject)
            name.value = ""
            date.value = ""
            location.value = ""
        })
    }
}

// getAllEventsToDom()
export default submit