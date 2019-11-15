import EventListeners from "./tasks/eventHandler"
import formElements from "./auth/domHandler"
// import loginRegClick from "./auth/eventHandler"
import newsFormElements from "./news/newsDomHandler.js"
import newsApi from "./news/newsApiHandler.js"
import newsRenderDom from "./news/newsEntryDom.js"
import registerEventListener from "./news/newsEventListeners"
import registerDeleteListener from "./news/deleteEventHandler"

///// EVENTS SECTION (author: Caroline Brownlee) /////
import activateEvents from "./events/eventFunctionHandler"




import loginRegClick from "./auth/eventHandler"
import renderDom from "./messages/domHandler.js"
import API from "./messages/apiHandler.js"
import attachSearchEvent from "./messages/messagesHandler.js"
import doThaThang from "./messages/eventHandler"


import taskForm from "./tasks/domHandler.js"
import eventsToDomFunctions from "./events/eventsDomHandler"



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











// loginRegClick()
// mainContainer.innerHTML += formHtml

// mainContainer.innerHTML += registration
// loginRegClick()

// API.getMessages()
//     .then(messages => renderDom.renderMessages(messages))

API.getMessages()
    .then(messages => {
        renderDom.renderMessages(messages)

        attachSearchEvent();
    })



    API.getMessages().then(renderDom)
    // write function to append appropriate entries based on mood selected by radio button
    
    // Invoke the method that attaches the event listener
    doThaThang.registerDeleteListener()
    doThaThang.registerEditListener()
    
    // Get all recipes from API and render them in the DOM
    

EventListeners.registerAddListener()

eventsToDomFunctions.getAllEventsToDom()
activateEvents()


// News Section
newsApi.getArticleEntries()
  .then(response => newsRenderDom.renderArticleEntries(response))

// newsRenderDom.renderArticleEntries()
registerEventListener()
registerDeleteListener()
   
    

  
