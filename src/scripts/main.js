/// LOGIN AND REGISTRATION (authors: Caroline Brownlee, Christian Pippin, Julian Garcia, and Corri Golden) /////
import registration from "./auth/registrationFunctionHandler"

registration()

///// EVENTS SECTION (author: Caroline Brownlee) /////
import activateEvents from "./events/eventFunctionHandler"
import eventsToDomFunctions from "./events/eventsDomHandler"

eventsToDomFunctions.getAllEventsToDom()
activateEvents()


///// NEWS SECTION (author: Corri Golden)
import newsApi from "./news/newsApiHandler.js"
import newsRenderDom from "./news/newsEntryDom.js"
import registerEventListener from "./news/newsEventListeners"
import registerDeleteListener from "./news/deleteEventHandler"
import newsFormElements from "./news/newsDomHandler.js"

newsApi.getArticleEntries()
.then(response => newsRenderDom.renderArticleEntries(response))
registerEventListener()
registerDeleteListener()

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
doThaThang.registerDeleteListener()
doThaThang.registerEditListener()
})

// import initRegistration from "./registration/mainRegistration";
// import dashboardFunctions from "./dashboard";

// let activeUserId = sessionStorage.getItem("activeUser")
// if (activeUserId === null) {
//     initRegistration()
// } else {
//     // Render initial display
//     dashboardFunctions()
// }