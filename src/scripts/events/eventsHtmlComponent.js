const makeEventComponent = (event) => {
    return `
        <section class="eventEntryHTML--${event.id}">
            <p>Name: ${event.name}</p>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            </br>
            </br>
            <button type="button" class="deleteBTN" id="deleteEvent--${event.id}">Delete Entry</button>
            <button type="button" id="editEvent--${event.id}">Edit Entry</button>
        </section>
    `
}

export default makeEventComponent

