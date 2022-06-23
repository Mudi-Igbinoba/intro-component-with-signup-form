const submitBtn = document.getElementById('submit-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const icon = document.querySelectorAll('.icon');
const error = document.querySelectorAll('.error');

submitBtn.addEventListener('click', checkError);

function checkError(e) {
    checkValidity(firstName, 0, 'First Name');
    checkValidity(lastName, 1, 'Last Name');
    checkValidity(email, 2, 'Email Address');
    checkValidity(password, 3, 'Password');
    e.preventDefault();
}

function checkValidity(name, index, text) {
    if (name.validity.typeMismatch) {
        isInvalid(name, index);
        name.style.color = 'hsl(0, 100%, 74%)';
        error[index].textContent = `Looks like this is not an email`;
    } else if (name.validity.valueMissing) {
        isInvalid(name, index);
        error[index].textContent = `${text} cannot be empty`;
    } else {
        isValid(name, index, text);
    }
}

function isInvalid(name, index) {
    name.classList.add('error-input');
    icon[index].style.display = 'block';
    name.placeholder = '';
}

function isValid(name, index, text) {
    name.classList.remove('error-input');
    icon[index].style.display = 'none';
    error[index].textContent = '';
    name.placeholder = `${text}`;
}
