




const registerEventListener = () => {                      //creating a function for delete Listener
    const addArticles = document.querySelector("#addBtn")        //targeting the class from HMTL.
    addArticles.addEventListener("click", event => {
        console.log(event)
        const addArticles = document.querySelector("#deleteBtn")        //targeting the class from HMTL.
        addArticles.addEventListener("click", event => {
            console.log(event)
        }
        )
    }




    // if (event.target.id.startsWith("deleteBtn")) {           //condition for if the startswith ***
    //     // Extract delete id from the button's id attribute
    //     const entryIDToDelete = event.target.id.split("--")[1]       //using the split method which I need to study ***
    //     console.log("Clicked")


export default registerEventListener