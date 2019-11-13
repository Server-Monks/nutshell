import formElements from "./auth/domHandler"
import activateEvents from "./events/eventFunctionHandler"

import loginRegClick from "./auth/eventHandler"

import submitFunction from "./events/eventsEventListeners"
import { SIGBUS } from "constants"

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

activateEvents()

// loginRegClick()
