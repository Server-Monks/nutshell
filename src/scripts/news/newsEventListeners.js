




export default {
    registerDeleteListener() {                         //creating a function for delete Listener
        let addArticles = document.querySelector(".add btn btn-primary btn-lg")        //targeting the class from HMTL.
        console.log(addArticles)
        addArticles.addEventListener("click", event => {
            console.log(event)
        })
    }
}

