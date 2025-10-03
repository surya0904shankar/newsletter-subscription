const signup = document.querySelector(".signup-form");
const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".valid-email");
const submitButton = document.querySelector(".subscribe");
const success = document.querySelector(".success");
const dismiss=document.querySelector(".dismiss");

dismiss.addEventListener("click",function(){
    success.style.display="none";
    signup.style.display="flex";
    emailInput.value="";
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let emailValue = emailInput.value;
    if (emailValue === "" || !emailValue.includes("@")) {
        errorMessage.style.display = "inline";
        success.style.display = "none";
        
    } else {
        errorMessage.style.display = "none";
        success.style.display = "block";
        signup.style.display = "none";
    }
});