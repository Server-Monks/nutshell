const makeEventComponent = (event) => {
    return `
        <section id="eventHtml" class="eventHTML--${event.id}">
            <p>Name: ${event.name}</p>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <button type="button" class="deleteBTN" id="deleteEvent--${event.id}">Delete Entry</button>
            <button type="button" id="editEvent--${event.id}">Edit Entry</button><hr />
        </section>
    `
}

export default makeEventComponent

