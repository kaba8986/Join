async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    loggedUser = JSON.parse(backend.getItem('logged-user')) || [];
    checkBoard();
    userProfil();
    userMorning();
    dayTime();
    addSummaryColor()
}


/**
 * morning greet with the name of the current user
 */
function userMorning() {
    if (loggedUser[0]['logged-in'] == true) {
        let name = loggedUser[0]['name'];
        let prename = loggedUser[0]['prename'];
        document.getElementById('user').innerHTML = `${prename} ${name}`;

    }
    else {
        document.getElementById('user').innerHTML = 'Good to see you!';
    }
}


/**
 * morning greet depending on the time of day
 */
function dayTime() {
    let objDate = new Date();
    let hours = objDate.getHours();
    if (hours >= 4 && hours < 12)
        document.getElementById('morning').innerHTML = 'Good morning';
    if (hours >= 12 && hours <= 18)
        document.getElementById('morning').innerHTML = 'Good afternoon';
    if (hours > 18 || hours < 4)
        document.getElementById('morning').innerHTML = 'Good evening';
}


/**
 * update of the amount of tasks
 */
function checkBoard() {
    showToDoNotesCounter()
    showProgressNotesCounter();
    showFeedbackNotesCounter();
    showDoneNotesCounter();
    let all = allTasks.length;
    document.getElementById('taskBoard').innerHTML = `${all}`;
    let urgent = allTasks.filter(t => t['img'] == '<img class="prio" src="accessories/img/capa_red.png">');
    urgentNumber = urgent.length;
    document.getElementById('urgent').innerHTML = `${urgentNumber}`;
    document.getElementById('date').innerHTML = '';
    for (i = 0; i < urgent.length; i++) {
        let newUrgentDate = urgent[i];
        document.getElementById('date').innerHTML += `${newUrgentDate['date']} <br>`;
    }
}


/**
 * amount of the to-do notes in board
 */
function showToDoNotesCounter() {
    let todo = allTasks.filter(t => t['processing_state'] == 'todoTable');
    toDoNumber = todo.length;
    document.getElementById('todo').innerHTML = `${toDoNumber}`;
}


/**
 * amount of the progress notes in board 
 */
function showProgressNotesCounter() {
    let progress = allTasks.filter(t => t['processing_state'] == 'progressTable');
    progressNumber = progress.length;
    document.getElementById('taskProgress').innerHTML = `${progressNumber}`;
}


/**
 * amount of the feedback notes in board
 */
function showFeedbackNotesCounter() {
    let feedback = allTasks.filter(t => t['processing_state'] == 'feedbackTable');
    feedbackNumber = feedback.length;
    document.getElementById('awaitingFeedback').innerHTML = `${feedbackNumber}`;
}


/**
 * amount of the done notes in board
 */
function showDoneNotesCounter() {
    let done = allTasks.filter(t => t['processing_state'] == 'doneTable');
    doneNumber = done.length;
    document.getElementById('done').innerHTML = `${doneNumber}`;
}
