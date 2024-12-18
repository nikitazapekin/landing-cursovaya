


const burger = document.querySelector(".burger")
let burgerPanel = document.querySelector(".header__navigation__mobile ")

let isActiveBurger = false
burger.addEventListener("click", () => {
    if (isActiveBurger) {
        burgerPanel.classList.remove("active")
    } else {
        burgerPanel.classList.add("active")
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
modalOverlay.addEventListener("click", ()=>{
    modal.classList.add("modal__close")
})
modalBtn.addEventListener("click", ()=>{
    modal.classList.add("modal__close")
})

/* info__btn
 <div class="modal modal__close">
                <form class="modal__inner">
                    <input type="text" class="modal__input" 
                    placeholder="ваше имя..." required
                    >
                    <input type="text" class="modal__input"
                    placeholder="номер телефона.." required
                    >
                    <input type="text" class="modal__input"
                    placeholder="email адрес..." required
                    >
                   <button class="form__submit">
                    Отправить
                   </button>
                </form>

                <div class="modal__background"></div>
*/