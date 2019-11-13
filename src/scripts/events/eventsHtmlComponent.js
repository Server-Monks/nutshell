const name = document.querySelector("#eventName")
const date = document.querySelector("#eventDate")
const location = document.querySelector("#eventLocation")

const createEvent = (event) => {
    return `
        <section class="eventEntryHTML">
            </br>
            <h3><u>Upcoming Events:</u></h3>
            </br>
            <p>${event.name}</p>
            <p>${event.date}</p>
            <p>${event.location}</p>
        </section>
    `
}

export default createEvent

