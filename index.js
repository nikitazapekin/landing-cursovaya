


const burger = document.querySelector(".burger")
let burgerPanel = document.querySelector(".header__navigation__mobile ")
const backgroundBurger = document.querySelector(".dark__background")

//background__closed
let isActiveBurger = false
burger.addEventListener("click", () => {
    if (isActiveBurger) {
        backgroundBurger.classList.add("background__closed")
        burgerPanel.classList.remove("active")
    } else {
        burgerPanel.classList.add("active")
        backgroundBurger.classList.remove("background__closed")
    }
    isActiveBurger = !isActiveBurger
})

const modalBtn = document.querySelector(".form__submit")
const modalOverlay = document.querySelector(".modal__background")
const infoBtn = document.querySelector(".info__btn")

const modal = document.querySelector(".modal")
infoBtn.addEventListener("click", () => {
    modal.classList.remove("modal__close")
})
modalOverlay.addEventListener("click", () => {
    modal.classList.add("modal__close")
})
modalBtn.addEventListener("click", () => {
    modal.classList.add("modal__close")
})
