const url = "http://localhost:8088/events"

const API = {
    getAllEvents() {
        return fetch(`${url}?_sort=date&_order=asc`)
            .then(response => response.json())
    },
    saveNewEvent(eventObject) {
        return fetch(`${url}`, { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    },
    deleteEvent(eventId) {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    getSingleEvent(eventId) {
        return fetch(`http://localhost:8088/events/${eventId}`)
        .then(response => response.json())
    },
    editEvent(eventId, updatedEvent) {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEvent)
        })

    }
}

export default API