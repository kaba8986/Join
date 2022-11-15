let newUser = true;
let newName = true;
let newEmail = true;
let newId;
let valid = false;
let allusers = [];

async function init() {
  await downloadFromServer();
  allusers = JSON.parse(backend.getItem('allUsers')) || [];
  for (i = 0; i < users.length; i++) {
    allusers.push(users[i]);
  }
}


/**
 * main check by signing up
 * @returns boolean
 */
function check() {
  let name = document.getElementById('input-name');
  let email = document.getElementById('input-email');
  let password = document.getElementById('input-password');
  document.getElementById('message-box').innerHTML = '';
  if (isFilled(name.value, email.value, password.value)) {
    newUser = alreadyRegistered(name.value, email.value);
    if (newUser) {
      i = allusers.length;
      signUp(i);
      valid = true;
    }
  }
  return valid;
}


/**
 * changing the color of the password eye icon if it is a type text or password
 */
function togglePassword() {
  let input = document.getElementById('input-password');
  let eye = document.getElementById('pass-eye');
  if (input.type == 'password') {
    input.type = 'text';
    eye.style.color = '#29ABE2';
  } else {
    input.type = 'password';
    eye.style.color = '#A8A8A8';
  }
}


/**
 * Check if any field is empty. If yes, execute errorMessage.
 * @param {string} name - name-value from user-input
 * @param {string} email - email-value from user-input
 * @param {string} password - password-value from user-input
 * @returns boolean
 */
function isFilled(name, email, password) {
  let filled = true;
  if (name == '') {
    errorMessage('name');
    filled = false;
  }
  if (email == '') {
    errorMessage('email');
    filled = false;
  }
  if (password == '') {
    errorMessage('password');
    filled = false;
  }
  return filled;
}


/**
 * for defining a person is already registered
 * @param {string} name - input name
 * @param {string} email - input email
 * @returns 
 */
function alreadyRegistered(name, email) {
  newName = checkName(name);
  newEmail = checkEmail(email);
  return (newName && newEmail);
}


/**
 * checking if the name is already known
 * @param {string} name 
 * @returns 
 */
function checkName(name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]['name'].toLowerCase() == name.toLowerCase()) {
      errorMessage('knownName');
      return false;
    }
  }
  return true;
}


/**
 * checking if the email is already known
 * @param {string} email 
 * @returns 
 */
function checkEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]['email'].toLowerCase() == email.toLowerCase()) {
      errorMessage('knownEmail');
      return false;
    }
  }
  return true;
}


/**
 * Print error that field is empty
 * @param {string} input - input-name that is missing
 */
function errorMessage(input) {
  let output = document.getElementById('message-box');
  output.classList.remove('dis-none');

  if (input == 'name' || input == 'email' || input == 'password') {
    output.innerHTML += `<p>Please enter valid ${input}.</p>`
  }
  if (input == 'knownName') {
    output.innerHTML += `<p>Name already known. Please change.</p>`
  }
  if (input == 'knownEmail') {
    output.innerHTML += `<p>Email already known. Please change.</p>`
  }
}


/**
 * new account is created
 * @param {number} i 
 */
function signUp(i) {
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let password = document.getElementById('input-password').value;

  let newEntry = {
    'id': i,
    'prename': name,
    'name': '!',
    'email': email,
    'password': password,
    'profile': './accessories/img/profile_guest.png',
  }

  allusers.push(newEntry);
  let usersAsString = JSON.stringify(allusers);
  backend.setItem('allUsers', usersAsString);
}


/**
 * hides the error message
 */
function hideOnFocus() {
  let output = document.getElementById('message-box');
  output.classList.add('dis-none');
}
