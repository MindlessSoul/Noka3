// validation
const form = document.querySelector('#register-form');
const username = document.querySelector('#userName');
const email = document.querySelector('#userEmail');
const password = document.querySelector('#userPassword');
const confirmPass = document.querySelector('#userConfirmPass');
const Gender = document.querySelector('#userGender');
const check = document.querySelector('#check');

form.addEventListener('submit', (event)=>{
  validateRegister();
  console.log(isFormValid());
  if(isFormValid()==true){
      form.submit();
   }else {
       event.preventDefault();
   }
});

function isFormValid(){
  const inputContainers = form.querySelectorAll('.textbox-box');
  let result = true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result = false;
      }
  });
  return result;
}

function validateRegister() {
 
  if(username.value.trim()==''){
    setError(username, 'Please Input Your Name !');
  }else {
      setSuccess(username);
  }


  if(email.value.trim()==''){
      setError(email, 'Please Input Your Email !');
  }else {
      setSuccess(email);
  }


  if(password.value.trim()==''){
      setError(password, 'Please Input Your Password !');
  }else {
      setSuccess(password);
  }


  if(confirmPass.value.trim()==''){
    setError(confirmPass, 'Please Input Your Password Confirmation !');
}else if(confirmPass.value.trim()!=password.value.trim() ){
    setError(confirmPass, 'Your Password and Password Confirmation is Not The Same !');
}else {
    setSuccess(confirmPass);
}


  if(Gender.value.trim()==''){
      setError(Gender, 'Please Choose Your Gender !');
  }else {
      setSuccess(Gender);
  }


  if(check.checked==false){
    setError(check, 'You Must Agree With the Terms & Condition !');
}else {
    setSuccess(check);
}
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
      parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element){
  const parent = element.parentElement;
  if(parent.classList.contains('error')){
      parent.classList.remove('error');
  }
  parent.classList.add('success');
}