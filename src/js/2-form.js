const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const getFormEl = document.querySelector('.feedback-form');

getFormEl.addEventListener('input', onFormInput);
getFormEl.addEventListener('submit', onFormSubmit);
window.addEventListener('load', restoreData);

function restoreData() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
    formData.email = parsedMessage.email;
    formData.message = parsedMessage.message;
    getFormEl.email.value = formData.email;
    getFormEl.message.value = formData.message;
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  getFormEl.reset();
  formData.email = '';
  formData.message = '';
}
