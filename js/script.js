const input = document.querySelector(".news__form");
const button = document.querySelector(".news__button");
const email = document.querySelector("#newsInputEmail");
button.addEventListener("click", function(event) {
    event.preventDefault();
    if(email.length < 1 || email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1) {
        alert("não é um email válido");
        return false;
    } else {
        const success = document.createElement("span");
    const successText = document.createTextNode("E-mail cadastrado com sucesso!");
    success.appendChild(successText);
    input.parentNode.insertBefore(success, input);
    }
    button.disabled = true;
});



