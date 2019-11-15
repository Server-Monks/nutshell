/// AUTHENTICATION SECTION (authors: Caroline Brownlee, Christian Pippin, Julian Garcia, and Corri Golden) /////
import formElements from "./auth/domHandler"

sessionStorage.setItem("activeUser", 1)
let currentUser = sessionStorage.getItem("activeUser")
console.log(currentUser)
const landingPage = formElements.regButtons()
const mainContainer = document.querySelector("#container")
mainContainer.innerHTML += landingPage

///// EVENTS SECTION (author: Caroline Brownlee) /////
import activateEvents from "./events/eventFunctionHandler"
import eventsToDomFunctions from "./events/eventsDomHandler"

eventsToDomFunctions.getAllEventsToDom()
activateEvents()

///// NEWS SECTION (author: Corri Golden)
import newsApi from "./news/newsApiHandler.js"
import newsRenderDom from "./news/newsEntryDom.js"
import registerEventListener from "./news/newsEventListeners"
import newsFormElements from "./news/newsDomHandler.js"

newsApi.getArticleEntries()
.then(response => newsRenderDom.renderArticleEntries(response))
registerEventListener()

///// TASKS SECTION (author: Julian Garcia) /////
import taskForm from "./tasks/domHandler.js"
import EventListeners from "./tasks/eventHandler"
EventListeners.registerAddListener()

///// MESSAGES SECTION (author: Christian Pippin) /////
import renderDom from "./messages/domHandler.js"
import API from "./messages/apiHandler.js"
import attachSearchEvent from "./messages/messagesHandler.js"
import doThaThang from "./messages/eventHandler"

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