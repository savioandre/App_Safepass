const loginCheck = document.querySelector('.bt_login')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const localInner = document.querySelector('.email_login')
const smallTry = document.querySelector('.smallTry')


loginCheck.addEventListener('click', () => {
    if (email.value.length <= 5
        || email.value.indexOf('@') == -1
        || email.value.indexOf('.') == -1) {
        email.style.border = "1px solid red"
        email.style.color = "red"

        smallTry.innerHTML = `Campo Inválido`

    } else {
        email.style.border = "1px solid #4caf50"
        email.style.color = "#4caf50"

    }
    
});

loginCheck.addEventListener('click', () => {
    if (password.value.length <= 5) {
        password.style.border = "1px solid red"
        password.style.color = "red"
    } else {
        password.style.border = "1px solid #4caf50"
        password.style.color = "#4caf50"

    }

});