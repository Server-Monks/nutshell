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

// Grabs the id's on the inputs in the newEventForm() and stores them in a variable
const name = document.querySelector("#eventName")
const date = document.querySelector("#eventDate")
const location = document.querySelector("#eventLocation")

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
            event.preventDefault()
            console.log("hey buddy")
            const eventObject = createEvent(name, date, location)
            console.log(eventObject)
            API.saveNewEvent(eventObject)
                name.value = ""
                date.value = ""
                location.value = ""
        })
        getAllEventsToDom()
    }
}

export default submit

// const saveEntryButton = document.querySelector("#BTN")
// // Attaches an event listener to that button and when clicked,...
// saveEntryButton.addEventListener("click", () => {
//     // invokes createJournalEntry and stores the returned object and key values in a variable.
//     const journalEntryObject = createJournalEntry(date, concept, content, mood)
//     // Fetch call to post new journal entry to the database, taking the above
//     const hiddenId = document.querySelector("#hiddenId").value
//     console.log(hiddenId)
//     if (hiddenId === "") {
//         API.saveJournalEntry(journalEntryObject).then(getAllJournalEntriesToDom)
//             date.value = ""
//             concept.value = ""
//             content.value = ""
//             mood.value = ""
//         // THEN the fetch call is made to get all entries, including the new post,
//     } else {
//         if (hiddenId !== "") {
//         entriesContainer.innerHTML = ""
//         API.editEntry(hiddenId, journalEntryObject)
//         .then(getAllJournalEntriesToDom)
//         .then(() => {
//             date.value = ""
//             concept.value = ""
//             content.value = ""
//             mood.value = ""
//         })

//         }
//     }
//     // Final, step of "click event" is to THEN clear the value of the input fields.
// })