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

export default createEvent

// Function that captures submit button on newEventForm() and saves a new event to database.json.
const submitFunction = () => {
    const newEventSubmitButton = document.querySelector("#newEventSubmitBTN")
    newEventSubmitButton.addEventListener("click", event => {
       event.preventDefault()
       console.log("this way", event)
    })
}

export default submitFunction

// HTML FOR EVENT TO POPULATE ON DOM AND WILL TAKE ONE EVENT AS ARGUMENT CALL FUNCTION .THEN FOREACH()
// const createEvent = (event) => {
//     return `
//         <section class="eventEntryHTML">
//             </br>
//             <h3><u>Upcoming Events:</u></h3>
//             </br>
//             <p>${event.name}</p>
//             <p>${event.date}</p>
//             <p>${event.location}</p>
//         </section>
//     `
// }