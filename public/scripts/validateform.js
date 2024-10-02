import validateEmail from '../assets/validateemail.js';

function validateForm(form) {
  let result = true;
  const emailValue = form.querySelector('#email-reg').value;
  const errorEmail = form.querySelector('#errorEmail');
  const passRegValue = form.querySelector('#password-reg').value;
  const passConValue = form.querySelector('#password-confirm').value;
  const errorRegPass = form.querySelector('#errorRegPass');
  const errorConPass = form.querySelector('#errorConPass');
  if (emailValue === '') {
    errorEmail.innerText = 'Укажите ваш email';
    result = false;
  } else if (!validateEmail(emailValue)) {
    errorEmail.innerText = 'Адрес не валиден';
    result = false;
  } else {
    errorEmail.innerText = '';
    result = true;
  }
  if (passRegValue === '') {
    errorRegPass.innerText = 'Укажите пароль';
    result = false;
  } else {
    errorRegPass.innerText = '';
    result = true;
  }
  if (passConValue === '') {
    errorConPass.innerText = 'Подтвердите пароль';
    result = false;
  } else if (passRegValue !== passConValue) {
    errorConPass.innerText = 'Введённые пароли должны совпадать';
    result = false;
  } else {
    errorConPass.innerText = '';
    result = true;
  }
  return result;
}

document.getElementById('regForm').addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm(this)) {
    console.log(this.querySelector('#email-reg').value);
    console.log(this.querySelector('#password-reg').value);
    console.log(this.querySelector('#password-confirm').value);
  }
});
