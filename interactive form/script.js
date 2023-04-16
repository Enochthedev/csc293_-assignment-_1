const form = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');
const address = document.getElementById('address');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
});

function validateForm() {
  let isValid = true;

  // Validate name field
  if (name.value.trim() === '') {
    setErrorFor(name, 'Name is required');
    isValid = false;
  } else {
    setSuccessFor(name);
  }

  // Validate email field
  if (email.value.trim() === '') {
    setErrorFor(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setErrorFor(email, 'Invalid email address');
    isValid = false;
  } else {
    setSuccessFor(email);
  }

  // Validate password field
  if (password.value.trim() === '') {
    setErrorFor(password, 'Password is required');
    isValid = false;
  } else if (password.value.trim().length < 6) {
    setErrorFor(password, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    setSuccessFor(password);
  }

  // Validate number field
  if (number.value.trim() === '') {
    setErrorFor(number, 'Number is required');
    isValid = false;
  } else {
    setSuccessFor(number);
  }

  // Validate address field
  if (address.value.trim() === '') {
    setErrorFor(address, 'Address is required');
    isValid = false;
  } else {
    setSuccessFor(address);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');
  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
