'use strict';
const form = document.forms[0];
const formFields = form.elements;
let firstName =formFields['first-name'];
let lastName = formFields['last-name'];
let email = formFields['email'];
let checkbox = formFields['checkbox'];
const query = formFields['query-type'];
const message = formFields['t-area'];




const validationRules = function(f){
const isValidNames = /^[a-zA-Z\u00C0-\u024F\s\-\']+$/

const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let type = f.dataset.type;

if (f.value.trim() === ''){
f.nextElementSibling.textContent = 'This field is required';
f.classList.add('active');
return false
  }

if (type === 'text'){
  if (!isValidNames.test(f.value)) {
    f.nextElementSibling.textContent = 'Names can\'t contain numbers or special characters';
    f.classList.add('active');
    return false
  }

  else if(f.value.length < 3){
    f.nextElementSibling.textContent = 'Names must be at least 3 characters long';
    f.classList.add('active');
    return false
  }

  else {
    f.nextElementSibling.textContent = '';
    f.classList.remove('active');
    return true
  }


}

if (type === 'email') {
 if (!isValidEmail.test(f.value)){
  f.nextElementSibling.textContent = 'Please enter a valid Email address';
  f.classList.add('active');
  return false
}

else{
  f.nextElementSibling.textContent = '';
  f.classList.remove('active');
  return true
}

}

if (type === 'checkbox') {

if (f.checked === false){

f.parentElement.nextElementSibling.textContent = 'You must give your consent to proceed';
return false
}
else{
  f.parentElement.nextElementSibling.textContent = '';
return true
}
}

if (type === 'message') {

if (f.value.trim().length < 40) {
f.nextElementSibling.textContent = 'Message must be at least 40 characters long';
f.classList.add('active');
return false
}
else{
  f.nextElementSibling.textContent = '';
  f.classList.remove('active');
  return true
}
}
}
let handleValidation = function(event){
  event.preventDefault();
const isFirstNameValid = validationRules(firstName)
const isLastNameValid = validationRules(lastName)
const isEmailValid = validationRules(email)
const isCheckboxValid = validationRules(checkbox)
const isMessageValid = validationRules(message)

const isChecked = document.querySelector('input[name="query-type"]:checked');

  if (!isChecked){
   document.querySelector('.query .error').textContent = 'Please select a query type';
 
  }

  else{
    document.querySelector('.query .error').textContent = '';
    
}

if (isFirstNameValid && isLastNameValid && isEmailValid && isCheckboxValid && isMessageValid && isChecked){
document.getElementById('alert').classList.add('visible');
setTimeout(() => {
  document.getElementById('alert').classList.remove('visible');
}, 3580); 
setTimeout(() => {
    location.reload(); 
}, 4000); 
  }


  

const formData = new FormData(form);
const data = Object.fromEntries(formData);

}

form.addEventListener('submit', handleValidation);




// <div class="query">


//   <p class="general-text">
//   Query Type <span>*</span>
// </p>

// <label class="radio-field border " for="general-enquiry">
// <input type="radio" name="query-type" class="enquiry general-text" data-type="radio" id="general-enquiry" value="general-enquiry">
// <p class="general-text radio-label">
//   General Enquiry
// </p>
// </label>
// <label class="radio-field border" for="support-request">
//   <input type="radio" name="query-type" data-type="radio" class="enquiry" id="support-request" value="support-request">
// <p class="general-text radio-label">
//    Support Request
// </p>
// </label>

//   <p class="error-text error"></p>
// </div>