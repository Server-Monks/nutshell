




const registerEventListener = () => {                      //creating a function for delete Listener
        const addArticles = document.querySelector("#addBtn")        //targeting the class from HMTL.
        addArticles.addEventListener("click", event => {
            console.log(event)
        })
    }


export default registerEventListener