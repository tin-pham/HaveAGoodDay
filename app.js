const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.close-button');
const anotherContainer = document.querySelector('.another-container');

openButton.addEventListener('click', () => {
    anotherContainer.classList.add('summon');
})

closeButton.addEventListener('click', () => {
    anotherContainer.classList.remove('summon');
})
