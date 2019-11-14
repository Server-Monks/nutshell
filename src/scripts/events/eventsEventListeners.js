import API from "./eventsApiHandler"
// import makeEventComponent from "./eventsHtmlComponent"
import eventsToDomFunctions from "./eventsDomHandler"


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
        // getAllEventsToDom()
        const newEventSubmitButton = document.querySelector("#newEventSubmitBTN")
        newEventSubmitButton.addEventListener("click", () => {
            console.log("hey buddy")
            const name = document.querySelector("#eventName")
            const date = document.querySelector("#eventDate")
            const location = document.querySelector("#eventLocation")
            const eventObject = createEvent(name, date, location)
            console.log(eventObject)
            API.saveNewEvent(eventObject).then(eventsToDomFunctions.getAllEventsToDom)
                name.value = ""
                date.value = ""
                location.value = ""
        })
    },
    deleteAndEditEventFunction() {
            const eventListContainer = document.querySelector("#eventsListContainer")
            eventListContainer.addEventListener("click", () => {
                    console.log("this works")
                    if (event.target.id.startsWith("deleteEvent--")) {
                            const eventToDelete = event.target.id.split("--")[1]
                            API.deleteEvent(eventToDelete).then(eventsToDomFunctions.getAllEventsToDom)
                        }
                    })
                }
}
            
export default submit

// const entriesContainer = document.querySelector(".entryLog")
// entriesContainer.addEventListener("click", () => {
//     if (event.target.id.startsWith("deleteEntry--")) {
//         // Extract id from the button's id attribute
//         const entryToDelete = event.target.id.split("--")[1]
//         // Fetch to delete entry which takes entry to delete as argument,
//         // THEN gets all journal entries to dom
//         API.deleteEntry(entryToDelete)
//         .then(getAllJournalEntriesToDom)
//     } else {
//         if (event.target.id.startsWith("editEntry--")) {
//             // If so, split the id from the button's id attribute,
//             const entryToEdit = event.target.id.split("--")[1]
//             // and fetch the single entry of that id from the database.
//             entriesContainer.innerHTML = ""
//             API.getSingleJournalEntry(entryToEdit)
//             // THEN take that entry,
//             .then(entry => {
//                 // invoke editForm,
//                 editForm(entry)
//                 // grab references to the input fields in the form,
//                 // and assign their values to the entry being edited.
//                 document.querySelector("#hiddenId").value = entry.id,
//                 document.querySelector("#journalDate").value = entry.date,
//                 document.querySelector("#concept").value = entry.concept,
//                 document.querySelector("#content").value = entry.content,
//                 document.querySelector("#mood").value = entry.mood
//             })
//         }
//     }
// })

// export default getAllJournalEntriesToDom
