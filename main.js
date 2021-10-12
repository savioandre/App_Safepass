// Insert Header
const header = document.querySelector('#header')
header.innerHTML = `<nav class="bar_nav_">
    <a href="./index.html" class="logo">
        <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 35V6.95L16 2L1 6.95V35L16.4286 43.25L31 35Z" fill="#D1DCED" stroke="#9AB3DA"
                stroke-width="2" />
            <path
                d="M12.915 21.5966V13.2852C12.915 11.6284 14.2582 10.2852 15.915 10.2852H16.0849C17.7418 10.2852 19.0849 11.6284 19.0849 13.2852V21.5966"
                stroke="#9AB3DA" />
            <rect x="7.77356" y="20.5684" width="16.453" height="11.3114" rx="1" fill="#404B7C" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.5485 22.4193H15.4516V25.8035C14.8126 26.0294 14.3547 26.6388 14.3547 27.3552C14.3547 28.2639 15.0914 29.0005 16 29.0005C16.9087 29.0005 17.6453 28.2639 17.6453 27.3552C17.6453 26.6388 17.1875 26.0294 16.5485 25.8035V22.4193Z"
                fill="#9AB3DA" />
        </svg>

    </a>

    <ul class="Bar">
        <li>
            <a class="a" href="./">Solutions
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li>
            <a class="a" href="">Resources
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li>
            <a class="a" href="">Company
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li><a class="a" href="./security.html">Security</a></li>

        <li><a class="a" href="/pricing.html">Pricing</a></li>

        <li><a class="a" href="./about.html">About Us</a></li>
    </ul>

    <div class="actions">
        <a href="/login.html" class="Login">Login</a>
        <a href="/sign.html" class="Sign ele-sa">Sign In</a>
    </div>

    <div class="nav_bar bg_nav" style="opacity: 0; visibility: hidden">
        <div class="img_logo_nav">
            <img src="/image/Cloud-Computing.png" width="150px">
        </div>
    </div>

    <div class="btn_mobile act_m">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#404B7C" />
            <path d="M8 16H32" stroke="#E5E5E5" stroke-width="3" stroke-linecap="round" />
            <path d="M8 24H32" stroke="#E5E5E5" stroke-width="3" stroke-linecap="round" />
        </svg>
    </div>
</nav>`

// nav and scroll
const scroll = document.getElementsByTagName('body')
window.addEventListener('scroll', function (event) {
    if (window.scrollY > 100) {
        document.querySelector('#header')
            .classList.add('testes')
    } else {
        document.querySelector('#header')
            .classList.remove('testes', 'anima')
    }
})

// Nav Mobile
// const btn_mobile = document.querySelector('.btn_mobile')
// btn_mobile.addEventListener('click', () => {
//     document.querySelector('.bar_mobile').classList.add('active_bar')
//     document.querySelector('body').style.overflow = "hidden"
// })

const btn_mobile = document.querySelector('.btn_mobile')
btn_mobile.addEventListener('click', () => {
    if (document.querySelector('.btn_mobile.act_m')) {
        document.querySelector('.bar_mobile').classList.add('active_bar')
        document.querySelector('body').style.overflow = "hidden"
        btn_mobile.classList.remove('act_m')
    } else {
        document.querySelector('.bar_mobile').classList.remove('active_bar')
        document.querySelector('body').style.overflow = "hidden"
        btn_mobile.classList.add('act_m')

    }
    
})