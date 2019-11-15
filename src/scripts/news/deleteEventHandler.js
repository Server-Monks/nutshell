import newsRenderDom from "./newsEntryDom.js"
import newsApi from "./newsApiHandler.js"



const registerDeleteListener = () => {
    let storedEntries = document.querySelector("#entryLog")        //targeting the class from HMTL.
    console.log(storedEntries)
    storedEntries.addEventListener("click", event => {
        console.log(event)                //using a method to add eventListener
        if (event.target.id.startsWith("deleteButton--")) {           //condition for if the startswith ***
            // Extract delete id from the button's id attribute
            const entryIDToDelete = event.target.id.split("--")[1]
            console.log(entryIDToDelete)

            // Invoke the delete method
            newsApi.deleteEntry(entryIDToDelete)              //performing the the delete entry function on from API
                .then(newsApi.getArticleEntries)
                .then(newsRenderDom.renderArticleEntries)
        }
    })
}


export default registerDeleteListener