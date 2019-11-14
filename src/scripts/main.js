import EventListeners from "./tasks/eventHandler"
import formElements from "./auth/domHandler"
// import loginRegClick from "./auth/eventHandler"
import newsFormElements from "./news/newsDomHandler.js"


import activateEvents from "./events/eventFunctionHandler"



import loginRegClick from "./auth/eventHandler"
import renderDom from "./messages/domHandler.js"
import API from "./messages/apiHandler.js"


import taskForm from "./tasks/domHandler.js"


sessionStorage.setItem("activeUser", 1)

let currentUser = sessionStorage.getItem("activeUser")
console.log(currentUser)

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const mainContainer = document.querySelector("#container")

// const welcome = formElements.welcomeTitle()

// const registration = formElements.RegForm()

// mainContainer.innerHTML += welcome

// mainContainer.innerHTML += registration

const landingPage = formElements.regButtons()
mainContainer.innerHTML += landingPage


// const sessionStorage.setItem("activeUser", user.id)
// console.log(sessionStorage)







activateEvents()




// loginRegClick()
// mainContainer.innerHTML += formHtml

// mainContainer.innerHTML += registration
// loginRegClick()

// API.getMessages()
//     .then(messages => renderDom.renderMessages(messages))

API.getMessages()
    .then(messages => renderDom.renderMessages(messages))

EventListeners.registerAddListener()
