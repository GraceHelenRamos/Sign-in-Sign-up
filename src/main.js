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


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
 
      return true;
  
    } else {
  
        if(input.name == 'email')
            document.getElementById("message-email").innerHTML="E-mail inválido";
        else if(input.name=='email_login') 
            document.getElementById("message-email-login").innerHTML="E-mail inválido";
  
      return false;
  
    }
  
  }

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

    $('#continueLogin').off().on('click', function(){
        if(ValidateEmail(document.forms[0].email_login)){
            window.open('welcome.html');
        }
        return false;
    });

    $('#continueAccount').off().on('click', function(){
        if($('#signupUsername').val()!='') {

            if($('#senha').val()==$('#confirm_senha').val() && $('#confirm_senha').val()!='') {
                if(ValidateEmail(document.forms[1].email)){
                    alert('Usuário criado com sucesso!');
                    window.open('index.html');
                }    
            }  else {
                alert('Preencha a senha e confirmação iguais');
            }
        } else {
            alert('Preencha o usuário');
        }
        return false;
    });
 

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if ((e.target.id === "signupUsername" || e.target.id === "email") && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        }); 
    });


});
