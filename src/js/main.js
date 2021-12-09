const mailBtn  =document.querySelector('.early-access__btn')
const mailInput = document.querySelector('#mail');
const err = document.querySelector('.error');
const regExp = /[@]/

mailBtn.addEventListener('click', () =>{
    
    if(mailInput.value == '' || !mailInput.value.match(regExp))
    {
        console.log(mail.getBoundingClientRect());
        err.style.display = 'block';
    }
})