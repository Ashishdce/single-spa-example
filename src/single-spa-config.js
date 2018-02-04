import * as singleSpa from 'single-spa';

// Register your first application with single-spa. More apps will be registered as you create them
singleSpa.registerApplication("header-app", () =>
    import (`./apps/header-app/header.js`), isActive());
singleSpa.registerApplication("footer-app", () =>
    import (`./apps/footer-app/footer.js`), isActive());
singleSpa.registerApplication("home-app", () =>
    import (`./apps/home-app/home.js`), isActive('/home'));
singleSpa.registerApplication("about-app", () =>
    import (`./apps/about-app/about.js`), isActive('/about'));

// Tell single-spa that you're ready for it to mount your application to the DOM
singleSpa.start();

// This is an "activity function"
function isActive(route) {
    return function(location) {
        return route ? location.pathname.indexOf(`${route}`) > -1 : true;
    }
}

const loader = document.querySelector('.loader-wrapper');

window.addEventListener('single-spa:before-routing-event', () => {
    console.log('before routing event occurred!');
    loader.style.display = 'block';
})
window.addEventListener('single-spa:routing-event', () => {
    console.log('routing event occurred!');
})
window.addEventListener('single-spa:app-change', () => {
    loader.style.display = 'none';
    console.log(singleSpa.getMountedApps(), loader.style.display)
})
window.addEventListener('single-spa:no-app-change', () => {
    loader.style.display = 'none';
    console.log(singleSpa.getMountedApps(), 'no app change');
})

window.addEventListener('single-spa:before-first-mount', () => {
    console.log('Suggested use case: remove a loader bar that the user is seeing right before the first app will be mounted');
    loader.style.display = 'none';
});
window.addEventListener('single-spa:first-mount', () => {
    console.log('Suggested use case: log the time it took before the user sees any of the apps mounted');
    // location.url('/home');
    // window.location.href = '/home';
    // console.log(document.querySelectorAll('.main-buttons')[0]);
    // document.querySelectorAll('.main-buttons')[0].click();
    if (window.location.href.indexOf('about') === -1 && window.location.href.indexOf('home') === -1) {
        document.querySelectorAll('.main-buttons')[0].click();
    }

});