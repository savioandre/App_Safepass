const teste = document.querySelector('.send_news')
const email = document.querySelector('#email_news')


teste.addEventListener('click', () => {
    if (email.value.length <= 5) {
        document.querySelector('.noConfirm').classList.add('active')
        document.querySelector('.confirm').classList.remove('active')

    } if (email.value.indexOf('@') == -1
        || email.value.indexOf('.') == -1) {
        const alterName = document.querySelector('.text_alter')
        const selec = `<p>E-mail Inválido</p>`
        email.style.border = "1px solid red"
        alterName.innerHTML = selec
//#ffe6e6
    } else {
        document.querySelector('.confirm').classList.add('active')
        document.querySelector('.noConfirm').classList.remove('active')
        email.style.border = "1px solid #4caf50"

    }

});

// Card
const check = document.querySelector('.in_swi')
check.addEventListener('click', () => {

    if (check.checked == false) {
        const alter = document.querySelector('.one_')
        const main = `<div>R$ 9,99</div>`
        alter.innerHTML = main

        const alterTwo = document.querySelector('.two_')
        const mainTwo = `<div>R$ 14,99</div>`
        alterTwo.innerHTML = mainTwo

    }
    if (check.checked == true) {
        const alter = document.querySelector('.one_')
        const main = `<div>R$ 7,99</div>`
        alter.innerHTML = main

        const alterTwo = document.querySelector('.two_')
        const mainTwo = `<div>R$ 12,99</div>`
        alterTwo.innerHTML = mainTwo

    }
    return check

});

// Bar
const bar = document.querySelector('.inject')
const nav = document.querySelector('.bar_nav_')

nav.addEventListener('hover', () => {
    document.querySelector('.inject').classList.add('active_bar')
})