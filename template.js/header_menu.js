let loggedUser = [];


/**
 * Sets profile-pic and turn menu from "log-in" to "log-out", if user is logged
 */
function userProfil() {
  if (loggedUser[0]['logged-in']) {
    let profilname = loggedUser[0]['profile'];
    document.getElementById('toggle').src = `${profilname}`;
    document.getElementById('nav-log').innerHTML = 'Log Out';
  }
}


/**
 * Open and closes header menu
 */
function toggleMenu() {
  document.getElementById('toggle-menu').classList.toggle('d-none');
}


/**
 * Log out user and redirect to login page
 */
function logout() {
  loggedUser = [];
  let logged = {
    'logged-in': false,
  }
  loggedUser.push(logged);
  let userAsString = JSON.stringify(loggedUser);
  backend.setItem('logged-user', userAsString);
  location.assign('Log_In.html');
}


/**
 * Checking viewport-size by resizing screen
 */
visualViewport.addEventListener('resize', checkViewport);



/**
 * Adds and removes help-element by small viewports
 */
function checkViewport() {
  if (window.innerWidth <= 480) {
    document.getElementById('nav-help').classList.add('d-none');
    document.getElementById('nav-legal').classList.add('d-none');
  } else {
    document.getElementById('nav-help').classList.remove('d-none');
    document.getElementById('nav-legal').classList.remove('d-none');
  }
}


function addLegalColor() {
  clearColor();
  document.getElementById('legalSide').classList.add('bluoption');
}



function addSummaryColor() {
  clearColor();
  document.getElementById('summarySide').classList.add('bluoption');
}



function addBoardColor() {
  clearColor();
  document.getElementById('boardSide').classList.add('bluoption');
}



function addTaskColor() {
  clearColor();
  document.getElementById('taskSide').classList.add('bluoption');
}



function addContactColor() {
  clearColor();
  document.getElementById('contactSide').classList.add('bluoption');
}




function clearColor() {
  document.getElementById('legalSide').classList.remove('bluoption');
  document.getElementById('summarySide').classList.remove('bluoption');
  document.getElementById('boardSide').classList.remove('bluoption');
  document.getElementById('taskSide').classList.remove('bluoption');
  document.getElementById('contactSide').classList.remove('bluoption');

}