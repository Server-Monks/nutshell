const taskFormElements = {
    taskForm: () => {
return `
<article id="taskContainer">
</article>

<section>
<div class="form-group">
<label for="formGroupExampleInput">Task Name</label>
<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Create Task" aria-label="Create Task" aria-describedby="taskButton">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="add-task-button">Add</button>
  </div>
</div>
</section>
`
    }
}

const renderTaskDom = document.querySelector("#taskContainer")
renderTaskDom.innerHTML += taskFormElements.taskForm()

export default taskFormElements