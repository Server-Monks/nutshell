const taskManager = {

    maketaskComponent(taskCard) {
        // Creates HTML structure for a chat message
        return `
        <div class="card--${taskCard.id}" style="width: 18rem;">
            <div class="task-card-body">
                <h5 class="task-card-title">${taskCard.userId}</h5>
                <p class="task-card-date">${taskCard.date}</p>
                <button id="deleteTaskCard--${taskCard.id}">Delete</button>
                <button id="editTaskCard--${taskCard.id}">Edit</button>
            </div>
        </div>`
    }
}

export default taskManager