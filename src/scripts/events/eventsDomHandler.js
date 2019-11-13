const mainContainer = document.querySelector("#container")

const eventsToDom = (event) => {
    mainContainer.innerHTML += event
}
export default eventsToDom