const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
    errorMessage.textContent = 'Please fill out all fields.';
  } else if (!emailIsValid(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email address.';
  } else {
    // form is valid, submit it
    form.submit();
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
