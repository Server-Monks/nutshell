const messageManager = {

    makeMessageComponent(messageCard) {
        // Creates HTML structure for a chat message
        return `
        <div class="card" id="card--${messageCard.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${messageCard.userId}</h5>
                <p class="card-text">${messageCard.message}</p>
                <p class="card-date">${messageCard.date}</p>
                <a href="#" class="btn btn-primary" id="deleteCard--${messageCard.id}">Delete</a>
                <a href="#" class="btn btn-primary" id="editCard--${messageCard.id}">Edit</a>
            </div>
        </div>`
    },

    makeMessageContainer() {
        return `
        <div class="card">
            <div class="card-header">
                <h2>Messages</h2>
            </div>
            <div class="card-body">
                <article id="insertMessagesHere"></article>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">New Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <a href="#" class="btn btn-primary" id="submitButton">Submit</a>
                </div>
            </div>
        </div>`
    }
}

export default messageManager