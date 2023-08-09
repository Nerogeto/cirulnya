const OpenPopUp = document.getElementById('popup_open');
const ClosePopUp = document.getElementById('close_pop');
const PopUp = document.getElementById('Popup');
const Zapis = document.getElementById('zapis')

OpenPopUp.addEventListener('click', function(e){
    e.preventDefault();
    PopUp.classList.add('active');
});

ClosePopUp.addEventListener('click', () => {
    PopUp.classList.remove('active');
});

Zapis.addEventListener('click', () => {
    PopUp.classList.remove('active');
});