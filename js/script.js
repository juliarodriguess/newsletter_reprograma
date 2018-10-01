const input = document.querySelector(".news__form");
const button = document.querySelector(".news__button");
button.addEventListener("click", function(event) {
    event.preventDefault();
    const success = document.createElement("span");
    const successText = document.createTextNode("E-mail cadastrado com sucesso!");
    success.appendChild(successText);
    input.parentNode.insertBefore(success, input);
})
