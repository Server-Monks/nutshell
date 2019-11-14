const editForm = (entry) => {
    return `
        <h1><u>EVENTS</u></h1>
        <form>
            <input type="hidden" id="hiddenId" value="" />
            <div class="form-group">
                <h5></br>Add A New Event:</h5>
                <label for="event">Name: </label>
                <input type="text" id="eventName" class="form-control" placeholder="enter name of event">
            </div>
            <div class="form-group">
                <label for="event">Date: </label>
                <input type="text" class="form-control" id="eventDate" placeholder="enter date of event">
            </div>
            <div class="form-group">
                <label for="event">Location: </label>
                <input type="text" class="form-control" id="eventLocation" placeholder="enter location of event">
            </div>
            </form>
        <button id="newEventSubmitBTN">Submit</button>
        </br>
        </br>
        <h3><u>Upcoming Events:</u></h3>
    `
}

export default editForm