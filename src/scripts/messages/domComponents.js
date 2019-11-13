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
    }
}

export default messageManager