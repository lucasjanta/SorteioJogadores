const burgerbutton = document.querySelector("#burgermenu");
const menu = document.querySelector(".menu");

burgerbutton.addEventListener("click", () => {
    menu.classList.toggle("activestatus");
})