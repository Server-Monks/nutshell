import entryManager from "./newsEntryComponent.js"






// const registerEventListener = () => {                      //creating a function for delete Listener
//     const addArticles = document.querySelector("#addBtn")        //targeting the class from HMTL.
//     addArticles.addEventListener("click", event => {
//         console.log(event)
//     }
//     )
// }


// creates an event listener that listens out for the click that contains the user's info.
// By calling the object passed into the call it goes up to where the variable was created asking
// what it is.  Then it parse the info by adding the value in each input
const registerEventListener = () => {                      //creating a function for event Listener
    document.querySelector("#addBtn").addEventListener("click", function () {
        const newArticleEntry = entryManager.createArticleObj(
            document.querySelector("#titleInput").value,
            document.querySelector("#descriptionInput").value,
            document.querySelector("#urlInput").value,
            )
        console.log(newArticleEntry);
        // API.postEntry(newJournalEntries)
        // .then(API.getJournalEntries).then(renderDom.renderJournalEntries)
    })
}










export default registerEventListener