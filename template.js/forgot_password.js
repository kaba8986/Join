let targetEmail = '';



/**
 * Check input entries
 * @returns boolean - valid Entry
 */
function check() {
  let send = false;
  let email = document.getElementById('input-email');
  document.getElementById('message-box').innerHTML = '';
  let notEmpty = checkIfEmpty(email.value);
  if (notEmpty) {
    checkIfKnown(email.value);
  }
  if (targetEmail) {
    send = true;
  }
  return send;
}



/**
 * Check if input-fields are filled
 * @param {string} email 
 * @returns boolean
 */
function checkIfEmpty(email) {
  if (email == '') {
    errorMessage('empty');
    return false;
  }
  return true;
}


/**
 * Check if entered email-adress already exist in database
 * @param {string} email - entered email-adress
 * @returns boolean
 */
function checkIfKnown(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      targetEmail = email;
      return true;
    }
  }
  errorMessage('unknown');
  return false
}


/**
 * Prints different errormessages by getting a subject
 * @param {string} input 
 */
function errorMessage(input) {
  let output = document.getElementById('message-box');
  output.classList.remove('dis-none');
  if (input == 'empty') {
    output.innerHTML += `<p>Please enter a valid email-adress.</p>`
  }
  if (input == 'unknown') {
    output.innerHTML += `<p>User doesn't exist. Please check again.</p>`
  }
}


/**
 * Sending email, leading to success-page
 * @param {string} target - email-adress, where mail should go to
 */
function sendMail(target) {
  let content = document.querySelector('.container');
  content.innerHTML = `
  <h1>Success</h1>
  <div class="success">
    <p>Email was sent to ${target}. <br> Please check your mailbox.</p>
    <p>Go back to <a href="Log_In.html"><b>Login</a></b>.</p>
  </div>
  `
}


/**
 * Reset error message
 */
function hideOnFocus() {
  let output = document.getElementById('message-box');
  output.classList.add('dis-none');
}