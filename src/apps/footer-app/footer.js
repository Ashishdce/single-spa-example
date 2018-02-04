const template = `
<footer class="footer">
    <div class="container">
        <div class="content has-text-centered">
            <p>
                <strong>&copy; Single SPA</strong> by <a href="https://ashishjangid.me">Ashish Jangid</a>.
            </p>
        </div>
    </div>
</footer>
`

// function addClickEvents() {
//     const buttons = document.querySelectorAll('.main-buttons');

//     function addHandler(route, i) {
//         buttons[i].addEventListener('click', (e) => {
//             e.preventDefault();
//             buttons.forEach(button => {
//                 button.classList.remove('is-active');
//             })
//             e.target.classList.add('is-active');
//             singleSpaNavigate(`${route}`);
//         })
//     }
//     addHandler('/home', 0);
//     addHandler('/about', 1);
// }

function clicked(e) {
    console.log('hi')
}
export async function bootstrap() {
    const container = document.getElementById('footer');
    container.innerHTML = template;
}

export function mount() {
    return Promise.resolve().then(() => {
        // addClickEvents();
        console.log('Footer Application Mounted');
    })
}

export function unmount() {
    return Promise.resolve().then(() => {
        container.innerHTML = '';
        console.log('Footer Application Unmounted');
    })
}