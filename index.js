const form = document.getElementById("form");

function showError(id, message) {
    document.getElementById(id).innerText = message;
  }

  // Utility function to clear all error messages
function clearErrors() {
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('password-error').innerText = '';
    document.getElementById('confirm-password-error').innerText = '';
}

// Utility function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    clearErrors();

    // Retrieve form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    let hasErrors = false; // Flag to check if any validation fails

    // Validate Name (required)
    if (name === '') {
      showError('name-error', 'Name is required.');
      hasErrors = true;
    }

    // Validate Email (required and valid format)
    if (email === '') {
      showError('email-error', 'Email is required.');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      showError('email-error', 'Please enter a valid email address.');
      hasErrors = true;
    }

    // Validate Password (required and minimum length)
    if (password === '') {
      showError('password-error', 'Password is required.');
      hasErrors = true;
    } else if (password.length < 6) {
      showError('password-error', 'Password must be at least 6 characters.');
      hasErrors = true;
    }

    // Validate Confirm Password (must match password)
    if (confirmPassword === '') {
      showError('confirm-password-error', 'Please confirm your password.');
      hasErrors = true;
    } else if (password !== confirmPassword) {
      showError('confirm-password-error', 'Passwords do not match.');
      hasErrors = true;
    }

    // If no errors, display success message
    if (!hasErrors) {
      alert('Form submitted successfully!');
    }
};

form.addEventListener("submit", handleSubmit);