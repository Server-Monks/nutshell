const mainContainer = document.querySelector("#eventsContainer")

const eventsToDom = (event) => {
    mainContainer.innerHTML += event
}
export default eventsToDom