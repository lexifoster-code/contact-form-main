const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')

 // Error Messages
const errorFirstName = document.getElementById('error-firstname')
const errorLastName = document.getElementById('error-lastname')
const errorConsent = document.getElementById('errorConsent')
const errorMessage = document.getElementById('error-message')
const errorEmail= document.getElementById('error-email')
const errorQuery= document.getElementById('error-query')
const successMsg = document.querySelector('.success-message')

let isValid = true;


const submitButton = document.getElementById('submitBtn')

submitButton.addEventListener('click' ,function(event){
event.preventDefault();

isValid = true ;
 
const firstName = firstNameInput.value.trim()
const lastName = lastNameInput.value.trim()

//First Name validation
if (firstName === '') {
    errorFirstName.style.display = 'block'
    isValid = false
    
}else{
    errorFirstName.style.display = 'none'
}

// Last Name validation
if (lastName === '') {
    errorLastName.style.display = 'block'
    isValid = false
} else {
    errorLastName.style.display = 'none'
    
}

// Consent checkbox  Validation
const checkbox = document.getElementById('consent')

if (!checkbox.checked) {
    errorConsent.style.display ='block'
    isValid = false
} else {
    errorConsent.style.display = 'none'
}


//email validation
const emailInput = document.getElementById('Email')
const email = emailInput.value.trim()
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Basic email regex
    if (email === "" || !emailRegex.test(email)) {
        errorEmail.style.display = 'block';
        isValid = false
    } else {
        errorEmail.style.display = 'none';
    }


    const queryRasdioBtns = document.getElementsByName('queryType')
    let isQuerySelected = false
    for (let i = 0; i < queryRasdioBtns.length; i++) {
        if (queryRasdioBtns[i].checked) {
          isQuerySelected = true;
          break;
        }
      }

      if (!isQuerySelected) {
        errorQuery.style.display = 'block'
        isValid = false
      } else {
        errorQuery.style.display = 'none'
      }

      if (isValid) {
        console.log("Form is valid! Showing success message.");
        successMsg.style.display = 'flex';

       // Reset the form after a short delay (5 seconds)
       setTimeout(() => {
        resetForm();
    }, 5000)
    } else {
        console.log("Form is not valid.");
    }
  
      }

)

function resetForm() {
  const form = document.getElementById('myForm');
  form.reset(); 
  successMsg.style.display = 'none';
}