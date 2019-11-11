const createEvent = (name, date, location) => {
    return `
        </br>
        <h3><u>Upcoming Events:</u></h3>
        </br>
        <p>${name}</p>
        <p>${date}</p>
        <p>${location}</p>
    `
}

export default createEvent