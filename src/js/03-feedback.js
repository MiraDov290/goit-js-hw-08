import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = JSON.parse(localStorage.getItem('STORAGE_KEY')) || {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
populateTextarea();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Відправити форму');
    
    evt.currentTarget.reset();
  localStorage.removeItem('STORAGE_KEY');
  formData = {};
}
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem('STORAGE_KEY'));
  const { email, message } = form.elements;
    if (savedMessage) {
      email.value = savedMessage.email || '';
      message.value = savedMessage.message || '';
    }
}
