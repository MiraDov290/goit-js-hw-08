
import throttle from 'lodash.throttle';

const throttle = require("lodash.throttle");


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
populateTextarea();

function onTextareaInput(evt) {
  const formData = evt.target.value;
    localStorage.setItem('feedback-form-state', formData);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Відправити форму');
    
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
}
function populateTextarea() {
    const savedMessage = localStorage.getItem('STORAGE_KEY');
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
      
    }
  
}
