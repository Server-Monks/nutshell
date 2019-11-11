
const createEvent = (name, date, location) => {
    const name = document.querySelector("#eventName").value
    const date = document.querySelector("#eventDate").value
    const location = document.querySelector("#eventLocation").value
    return `
        </br>
        <h3><u>Upcoming Events:</u></h3>
        </br>
        <p>${name.name}</p>
        <p>${date.date}</p>
        <p>${location.location}</p>
    `
}

export default createEvent