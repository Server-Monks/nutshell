// import events from "./news/newsEventListeners"

const newsFormElements = {
  newsPage: () => {
      return `
      <div class="jumbotron">
      <h1 class="display-4">Interesting Finds!</h1>
      <hr class="my-4">
      <p class="lead">
        <a class="add btn btn-primary btn-lg" href="#" role="button">Add Article</a>
        <a class="edit btn btn-primary btn-lg" href="#" role="button">Edit Article</a>
        <a class="delete btn btn-primary btn-lg" href="#" role="button">Delete Article</a>
      </p>
    </div>
    `
  }
}





const newsRenderDom = document.querySelector("#container2")
newsRenderDom.innerHTML += newsFormElements.newsPage()

// events.registerDeleteListener()

export default newsFormElements

