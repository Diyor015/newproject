let date = document.querySelector('.date');
let body = document.querySelector('body');

'use strict'

let getDate = new Date();
let dateLocal = getDate.getDate()
let month = getDate.getMonth() + 1;
let year = getDate.getFullYear()


date.innerHTML = `${dateLocal}. 0${month}. ${year}`

let mySong = document.querySelector('#mySong');
let icon = document.querySelectorAll('.fa-solid');

for (let i = 0; i <= icon.length; i++){
    icon[i].addEventListener('click', () => {
        if(mySong.paused){
            mySong.play()
            icon[0].style.display = 'none'
            icon[1].style.display = 'block'
        }
        else{
            mySong.pause()
            icon[0].style.display = 'block'
            icon[1].style.display = 'none'
        }
    })
}

// let date = document.querySelector('.date');
let btnModal = document.querySelectorAll('.hover_btn');
let btnClose = document.querySelector('.btn_btn');
let modal = document.querySelector('.section_modal');

btnClose.addEventListener('click', () =>{
    modal.classList.remove('active')
})


btnModal.forEach(elem => {
    elem.addEventListener('click', () => {
        modal.classList.add('active')
    })
});