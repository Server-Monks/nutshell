import formElements from "./auth/formHandler"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
const mainContainer = document.querySelector("#container")

const formHtml = formElements.loginForm()

const welcome = formElements.welcomeTitle()

const registration = formElements.RegForm()

mainContainer.innerHTML += welcome

mainContainer.innerHTML += formHtml
mainContainer.innerHTML += registration
