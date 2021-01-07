// Slider 
const container = document.querySelector('.sl-container'); 
const track = document.querySelector('.sl-track'); 
const btnPrev = document.querySelector('.content__btn-prev'); 
const btnNext = document.querySelector('.content__btn-next'); 
const itemsCount = document.querySelectorAll('.sl-items').length;
let slidesLeft = itemsCount;
let position = 0;

btnNext.addEventListener('click', () => {
    position -= 286;
    slidesLeft -= 1;
    track.style = `transform: translateX(${position}px)`;
    chckBtns();
})
btnPrev.addEventListener('click', () => {
    position += 286;
    slidesLeft += 1
    track.style = `transform: translateX(${position}px)`;
    chckBtns();
})

const chckBtns = () => {
    btnPrev.disabled = slidesLeft === itemsCount;
    btnNext.disabled = slidesLeft == 1;
}

chckBtns();
