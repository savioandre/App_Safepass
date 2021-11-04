const chekcLength = document.querySelector('.m_help')
const efImgInput = document.querySelector('.btn_sub_input')

chekcLength.addEventListener('keyup', () => {
    if (chekcLength.value.length <= 0) {
        efImgInput.classList.add('lu-mode-selec')
    } else {
        efImgInput.classList.remove('lu-mode-selec')
    }
})

const form = document.querySelector('.form_Input')
const btn = document.querySelector('.btn_sub_input')
const input = document.querySelector('.m_help')

var reMes
function userMessage () {
    reMes = document.createElement('div')
    reMes.classList.add('message')

    document.querySelector('.main_chat').appendChild(reMes)
    initMesssage()
}

function initMesssage() {
btn.addEventListener('click', () => {
    if (input.value.length <= 0) {
        input.value.length = " "
    } else {
        sendMesssage()
        // chatMessage()
    }
})
}

userMessage()

function sendMesssage() {
    const mes = document.createElement('p')
    const p = document.querySelector('.m_help').value

    mes.classList.add('chat_res')
    mes.innerHTML = p

    reMes.appendChild(mes);
    btn.setAttribute("type", "reset")
    chatMessage()
}

var createDiv
function chatMessage() {
    const area = document.querySelector('.main_chat')
    createDiv = document.createElement('div')
    createDiv.classList.add('chat_m')

    area.appendChild(createDiv)
    insertChatMessage()
}

function insertChatMessage() {
    const background = document.createElement('div')
    background.classList.add('img_chat_sen')

    createDiv.appendChild(background)
    respondendo()
}

function respondendo() {
    const p = document.querySelector('.m_help').value
    var rest = 'Como vai ' + p + '?'
    const mes = document.createElement('p')

    mes.classList.add('chat_mess')
    mes.innerHTML = rest
    createDiv.appendChild(mes);

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let KeyP = btn
        KeyP.click();
    }
});

const open = document.querySelector('.chat_img')
const img = document.querySelector('.chat_meet')

open.addEventListener('click', () => {
    img.style.display = "flex"
    open.style.opacity = 0
})

const close = document.querySelector('.close_chat')

close.addEventListener('click', () => {
    img.style.display = "none"
    open.style.opacity = 1
})

const pricing = document.querySelector('.opt_pri')
const message = document.querySelector('.message')

pricing.addEventListener('click', () => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('mes_pri_new')
    const inner = `
        <p class="chat_res">
            <strong>Pricing</strong>
        </p>

        <p class="chat_res">
            Precisa de ajuda para tornar sua emmpresa mais segura?<br>
            <strong>Conte com a gente!</strong><br>

            Temos planos flexíveis para todos os tipos de empresas<br>

            <a href="./pricing.html" class="a_pri">Ver planos</a>
        </p>`
    
    newDiv.innerHTML = inner
    message.appendChild(newDiv)
})