import formElements from "./formHandler"
import welcomePageHTML from "./registrationHtmlComponent"
import renderFunctions from "./domHandler"

// import registrationAPI from "./dataRegistration"
// import dashboardFunctions from "../dashboard"

// function that creates a new user object when someone registers
const createNewUser = (username, password) => {
    return {
        username: username.value,
        password: password.value
    }
}
// function called in main.just that renders login and registration buttons to dom
const registration = () => {
    // calls the function for the buttons and stores them into a variable
    const landingPage = formElements.regButtons()
    // grabs reference to the dom
    const registrationContainer = document.querySelector("#registration")
    // const dashboardContainer = document.querySelector("#dashboardContainer")
    // puts welcome to Nutshell on the dom
    const welcome = formElements.welcomeTitle()
    // renders to the dom taking the above variable as an
    renderFunctions.renderRegistration(welcome)
    // puts the buttons on the dom
    registrationContainer.innerHTML += landingPage

}



    // Create a new user object

//     // Event listener on results container
//     registrationContainer.addEventListener("click", () => {
//         // User clicks on "Don't have an account?"
//         if (event.target.id.startsWith("noAccount")) {
//             registrationContainer.innerHTML = ""
//             const newAccountHTML = welcomePageHTML.createAccount()
//             renderFunctions.renderRegistration(newAccountHTML)
//             // User clicks on "Log In"
//         } else if (event.target.id.startsWith("logIn")) {
//             // Get reference to username and password input fields
//             const usernameInput = document.querySelector("#username")
//             const passwordInput = document.querySelector("#password")
//             if (usernameInput.value === "" || passwordInput.value === "") {
//                 alert("Please fill out both fields")
//             } else {
//                 registrationAPI.getSingleUser(usernameInput.value)
//                     .then(user => {
//                         if (user.length < 1) {
//                             alert("Account does not exist. Please click \"Don't have an account?\" to create one.")
//                         } else if (user[0].username === usernameInput.value && user[0].password === passwordInput.value) {
//                             sessionStorage.setItem("activeUser", user[0].id)
//                             registrationContainer.innerHTML = ""
//                             dashboardFunctions()
//                         } else {
//                             alert("Username and password do not match any registered account. Please try again.")
//                         }
//                     })
//             }
//         } else if (event.target.id.startsWith("saveNewAccount")) {
//             // User clicks on the "Create Account" button after clicking on "Don't have an account?"
//             // Get reference to username and password input fields
//             const usernameInput = document.querySelector("#username")
//             const passwordInput = document.querySelector("#password")
//             if (usernameInput.value === "" || passwordInput.value === "") {
//                 alert("Please fill out both fields")
//             } else {
//                 registrationAPI.getSingleUser(usernameInput.value)
//                     .then(user => {
//                         if (user.length < 1) {
//                             const newUser = createNewUser(usernameInput, passwordInput)
//                             registrationAPI.saveNewUser(newUser)
//                                 .then(newUser => {
//                                     sessionStorage.setItem("activeUser", newUser.id)
//                                     registrationContainer.innerHTML = ""
//                                     dashboardFunctions()
//                                 })
//                         } else {
//                             alert("Username already exists. Please choose another or log in if you already have an account")
//                         }
//                     })
//             }
//         } else {
//             event.stopPropagation()
//         }
//     })
// }

export default registration