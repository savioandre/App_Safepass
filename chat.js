const chekcLength = document.querySelector('.m_help')
const efImgInput = document.querySelector('.btn_sub_input')
const chat = document.querySelector('.chat_i')

chat.addEventListener('click', () => {
    if (chekcLength.value.length < 1) {
        efImgInput.classList.add('lu-mode-selec')
    } 
    if (chekcLength.value.length >= 1) {
        efImgInput.classList.remove('lu-mode-selec')
    }

    addEventListener('click', chekcLength)
})

const testeP = document.querySelector('.chat_res')
efImgInput.addEventListener('click', () => {
    let nome = chekcLength.value
    testeP.innerHTML = nome
});
// function check() {
//     if (chekcLength.value.length > 1) {
//         efImgInput.classList.add('lu-mode-selec')
//     } else {
//         // chekcLength.setAttribute("readonly", "false")
//         efImgInput.classList.remove('lu-mode-selec')
//     }
// }

const form = document.querySelector('.form_Input');
const btn = document.querySelector('.btn_sub_input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

const DOM = {
    addMessage(one, index) {
        const divInner = document.createElement('div')
        divInner.classList.add('message')
        divInner.innerHTML = DOM.innerMessage(one)

        console.log(divInner)
    },
    innerMessage(one) {
        const message = `
        <div class="res_chat">
            <div class="chat_send mes">
                <p class="chat_res">
                    Hi there! How can i help you?
                </p>
            </div>
        </div>
        `
        return message
    }
}

// Clo O
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

    const inner = `
        <div class="res_chat">
            <div class="chat_send mes">
                <p class="chat_res">
                    Pricing
                </p>
            </div>
        </div>

        <div class="res_chat other">
            <div class="chat_send mes">
                <p class="chat_res">
                    Precisa de ajuda para tornar sua emmpresa mais segura?<br>
                    <strong>Conte com a gente!</strong><br>

                    Temos planos flexíveis para todos os tipos de empresas<br>

                    <a href="./pricing.html" class="a_pri">Ver planos</a>
                </p>
            </div>
        </div>`

    message.innerHTML = inner;
<<<<<<< HEAD
})

// Loader
function loader() {
    document.querySelector('.loader').classList.add('test')
}

function refresh() {
    setInterval(loader, 3000);
}

window.onload = refresh;
=======
})
>>>>>>> 5f28ab5b37877786f96ff0c8e86110fc73b59c0d
