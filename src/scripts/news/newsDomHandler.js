import registerEventListener from "./newsEventListeners"


const newsFormElements = {
  newsPage: () => {
    return `
      <div class="jumbotron">
      <h1 class="display-4">Interesting Finds!</h1>
      <section>
        <label for="titleInput" for="id">Title</label>
        <input id="titleInput" type="text" id="name-input">
      </section>
      <section>
        <label for="urlInput" for="url">URL</label>
        <input id="urlInput" type="text" id="name-input">
      </section>
      <section>
        <label for="synopsis" for"synopsis">Synopsis</label>
        <input id="synopsisInput" type="text" id="desc-input">
      </section>
      <section>
        <label for="dateInput">Date</label>
        <input id="dateInput" type="text" id="image-input">
      </section>
      <hr class="my-4">
      <p class="lead">
        <a class="add btn btn-primary btn-lg" id="addBtn" href="#" role="button">Add Article</a>
      </p>
    </div>
    `
  }
}


const newsRenderDom = document.querySelector("#container2")
newsRenderDom.innerHTML += newsFormElements.newsPage()


// registerEventListener()

export default newsFormElements

