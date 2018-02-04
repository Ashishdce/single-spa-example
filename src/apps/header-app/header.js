// import 'main.js';
const template = `
<section class="hero is-primary">
<div class="hero-body">
    <div class="container">
        <p class="title">Single SPA Example</p>
        <p class="subtitle">An Easy Way To Start With!</p>
    </div>
</div>
</section>
<nav class="navbar has-shadow">
<div class="container">
    <div class="navbar-tabs">
        <a class="main-buttons navbar-item is-tab">
                Home
            </a>
        <a class="main-buttons navbar-item is-tab">
                About
            </a>
    </div>
</div>
</nav>
`

function addClickEvents() {
    const buttons = document.querySelectorAll('.main-buttons');

    function addHandler(route, i) {
        buttons[i].addEventListener('click', (e) => {
            e.preventDefault();
            if (window.location.href.indexOf(route) === -1) {
                buttons[0].classList.remove('is-active');
                buttons[1].classList.remove('is-active');
                e.target.classList.add('is-active');
                singleSpaNavigate(`${route}`);
            }
        })
    }
    addHandler('/home', 0);
    addHandler('/about', 1);
    return buttons;
}

function clicked(e) {
    console.log('hi')
}
export async function bootstrap() {
    const container = document.getElementById('header');
    container.innerHTML = template;
}

export function mount() {
    return Promise.resolve().then(() => {
        const buttons = addClickEvents();
        if (window.location.href.indexOf('about') > -1) {
            buttons[1].classList.add('is-active');
        } else {
            buttons[0].classList.add('is-active');
        }
        console.log('Header Application Mounted');
    })
}

export function unmount() {
    return Promise.resolve().then(() => {
        container.innerHTML = '';
        console.log('Header Application Unmounted');
    })
}