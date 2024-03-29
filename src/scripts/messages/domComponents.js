const messageManager = {

    makeMessageContainer() {
        return `
        <div class="card">
            <div class="card-header">
                <h2>Messages</h2>
            </div>
            <div class="card-body">
                <article id="insertMessagesHere"></article>
                <div class="form-group">
                    <input type="hidden" id="messageId" value="" />
                    <label for="exampleFormControlTextarea1">New Message</label>
                    <textarea class="form-control" name="messageBody" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <a href="#" class="btn btn-primary" id="submitButton">Submit</a>
                </div>
            </div>
        </div>`
    },

    makeMessageComponent(messageCard) {
        // Creates HTML structure for a chat message
        return `
        <div class="card" id="card--${messageCard.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${messageCard.userId}</h5>
                <p class="card-text">${messageCard.message}</p>
                <p class="card-time">${messageCard.time}</p>
                <a href="#" class="btn btn-primary" id="deleteCard--${messageCard.id}">Delete</a>
                <a href="#" class="btn btn-primary" id="editCard--${messageCard.id}">Edit</a>
            </div>
        </div>`
    },

    makeEditMessageForm() {
        return `
        <div class="form-group">
            <input type="hidden" id="messageId" value="" />
            <label for="exampleFormControlTextarea1">Edit Message</label>
            <textarea class="form-control" name="editedMessageBody" id="exampleFormControlTextarea1" rows="3"></textarea>
            <a href="#" class="btn btn-primary" id="submitEditButton">Submit</a>
        </div>
        `
    }
}

export default messageManager