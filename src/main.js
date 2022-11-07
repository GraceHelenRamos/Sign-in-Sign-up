/* import IMask from 'imask'; */

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

/* const inputEmail = document.querySelector("#email");
console.log(inputEmail)
function validationEmail(field){
    // console.log(field)
    user = field.valeu.substring(0, field.value.indexOf("@"));
    domain = field.valeu.substring(field.value.indexOf("@")+1, field.value.length);

        if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)){
           document.getElementById("message-email").innerHTML = "Valid email"; 
            alert("Valid email");
        }else{
         document.getElementById("message-email").innerHTML="font color='red'>Invalid email</font>"; 
            alert("Invalid email");
        }
    }  */

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submitAccount", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid username/password combination");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        }); 
    });

   /*  loginForm.addEventListener("submit", event => {
        event.preventDefault();
    //   console.log(validationEmail()) 
    }); */

});