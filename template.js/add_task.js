async function init() {
  await downloadFromServer();
  jsonParse();
  userProfil();
  fillAssigns();
  addTaskColor();
}


/**
 * Loading Server Datas
 */
function jsonParse() {
  allTasks = JSON.parse(backend.getItem('allTasks')) || [];
  loggedUser = JSON.parse(backend.getItem('logged-user')) || [];
  allUsers = JSON.parse(backend.getItem('allUsers')) || [];
  allContacts = JSON.parse(backend.getItem('allContacts')) || [];
}




