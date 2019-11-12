const taskFormElements = {
    taskForm: () => {
retun `
<article id="taskContainer">
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1"></label>
        <button class="btn btn-outline-secondary" type="button" id="edit--1">Edit</button>
        <button class="btn btn-outline-secondary" type="button" id="delete--1">Delete</button>
    </div>

    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck2">
        <label class="custom-control-label" for="customCheck2"></label>
        <button class="btn btn-outline-secondary" type="button" id="edit--2">Edit</button>
        <button class="btn btn-outline-secondary" type="button" id="delete--2">Delete</button>
    </div>

    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck3">
        <label class="custom-control-label" for="customCheck3"></label>
        <button class="btn btn-outline-secondary" type="button" id="edit--3">Edit</button>
        <button class="btn btn-outline-secondary" type="button" id="delete--3">Delete</button>
    </div>

    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck4">
        <label class="custom-control-label" for="customCheck4"></label>
        <button class="btn btn-outline-secondary" type="button" id="edit--4">Edit</button>
        <button class="btn btn-outline-secondary" type="button" id="delete--4">Delete</button>
    </div>

    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck5">
        <label class="custom-control-label" for="customCheck5"></label>
        <button class="btn btn-outline-secondary" type="button" id="edit--5">Edit</button>
        <button class="btn btn-outline-secondary" type="button" id="delete--5">Delete</button>
    </div>
</article>

<section>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Paste URL Link" aria-label="Paste URL Link" aria-describedby="taskButton">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="addTaskButton">add</button>
  </div>
</div>
</section>`
    }
}

export default taskFormElements