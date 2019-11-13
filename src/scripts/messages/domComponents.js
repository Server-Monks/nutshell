const messageManager = {

    makeMessageComponent(messageCard) {
        // Creates HTML structure for a chat message
        return `
        <div class="card--${messageCard.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${messageCard.userId}</h5>
                <p class="card-text">${messageCard.message}</p>
                <p class="card-date">${messageCard.date}</p>
                <button id="deleteCard--${messageCard.id}">Delete</button>
                <button id="editCard--${messageCard.id}">Edit</button>
            </div>
        </div>`
    },

    makeMessageFormContainer(newMessageForm) {
        return
        `<article id="messageListContainer"></article>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Create Task" aria-label="Create Task" aria-describedby="taskButton">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="add-task-button">Add</button>
  </div>
</div>`
    }
}

export default messageManager