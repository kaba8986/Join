let newPassword = '';
let minLength = false;
let valid = false;


/**
 * main function for checking the conditions of the password
 * @returns boolean
 */
function check() {
  let p1 = document.getElementById('input-password');
  let p2 = document.getElementById('confirm-password');
  document.getElementById('message-box').innerHTML = '';
  let notEmpty = checkIfEmpty(p1.value, p2.value);
  if (notEmpty) {
    newPassword = compare(p1.value, p2.value);
    minLength = checkLength(p1.value);
  }
  if (newPassword && minLength) {
    changeEntry();
    valid = true;
  }
  return valid;
}


/**
 * Check if values are empty and execute errorMessage
 * @param {string} p1 - password value from user-input
 * @param {string} p2 - confirming value from user-input
 * @returns boolean
 */
function checkIfEmpty(p1, p2) {
  let filled = true;
  if (p1 == '') {
    errorMessage('p1');
    filled = false;
  }
  if (p2 == '') {
    errorMessage('p2');
    filled = false;
  }
  return filled;
}


/**
 * Check if password-value has the necessary min-length, if not execute errorMessage
 * @param {string} p1  - password value from user-input
 * @returns boolean
 */
function checkLength(p1) {
  if (p1.length < 8) {
    errorMessage('length');
    return false;
  }
  return true;
}


/**
 * Print an errorMessage 
 * @param {string} input - error-type
 */
function errorMessage(input) {
  let output = document.getElementById('message-box');
  output.classList.remove('dis-none');
  if (input == 'p1') {
    output.innerHTML += `<p>Please enter a password.</p>`
  }
  if (input == 'p2') {
    output.innerHTML += `<p>Please confirm your password.</p>`
  }
  if (input == 'length') {
    output.innerHTML += `<p>Your password should have a length of minimum 8 characters.</p>`
  }
  if (input == 'difference') {
    output.innerHTML += `<p>Passwords are not the same. Please check.</p>`
  }
}


/**
 * Compare if password and confirming password are the same
 * @param {string} p1 - password value from user-input
 * @param {string} p2 - confirming value from user-input
 * @returns boolean
 */
function compare(p1, p2) {
  if (p1 != p2) {
    errorMessage('difference');
    return false;
  }
  return true;
}


/**
 * Change user-entry (not implemented!) - user output - redirect 
 */
function changeEntry() {
  let content = document.querySelector('.container');
  content.innerHTML = `
  <h1>Change successful!</h1>
  <div class="success">
    <p>You set a new password.</p>
    <p>Go back to <a href="Log_In.html"><b>Login</a></b>.</p>
  </div>
  `
}


/**
 * hides the error message
 */
function hideOnFocus() {
  let output = document.getElementById('message-box');
  output.classList.add('dis-none');
}


/**
 * 
 * @param {string} str 
 * @param {string} i 
 */
function togglePassword(str, i) {
  let input = document.getElementById(`${str}-password`);
  let eye = document.getElementById(`pass-eye-${i}`);

  if (input.type == 'password') {
    input.type = 'text';
    eye.style.color = '#29ABE2';
  } else {
    input.type = 'password';
    eye.style.color = '#A8A8A8';
  }
}