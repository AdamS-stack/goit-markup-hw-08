let mobileClose = document.querySelector(".mobile-btn");
let mobileBtnOpen = document.querySelector(".hamburger-menu");
let mobileBtnClose = document.querySelector(".mobile-btn__close");

mobileBtnOpen.addEventListener("click", (e) => {
    mobileClose.classList.remove("none");
});
mobileBtnClose.addEventListener("click", (e) => {
    mobileClose.classList.add("none");
});
