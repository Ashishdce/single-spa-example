import * as React from 'react';

export default class Root extends React.Component {
    componentDidCatch(err, info) {
        console.log(err, info);
    }
    render() {
        return (
        // <div style = {{ marginTop: '100px' } } >
        //     This was rendered by app 1, which is written in React. </div>
<div className="section">
    <div className="container">
        <div className="hero is-light">
            <div className="hero-body">
                <p className="title is-4">All You Need To Know About Microfrontends..</p>
                <p className="subtitle is-6">What is made up of what?</p>

            </div>
        </div>
        <br />
        <br />
        <div className="tile is-ancestor">
            <div className="tile is-6 is-vertical is-parent">
                <div className="tile is-child box">
                    <p className="title is-4">Header App</p>
                    <p>The header part including the navigation bar, which sits on the top, has been made using vanilla javascript. It contains the html template that is being added to the contianer element with id '#header' present in the main single-spa-index.html page.
                      </p>
                      <p>  The template is added to the container as the innerHTML in the bootstrap lifecycle method of the header-app which is exported by the header-app.js. Once bootstrapped, the eventListeners are added for the navigation links in the mount lifecycle function. This header-app's activity function always return truthy value, that's why its always visible.
                    </p>
                </div>
                <div className="tile is-child box">
                    <p className="title is-4">Footer App</p>
                    <p>The footer part which sits at the bottom, has been made using vanilla javascript. It contains the html template that is being added to the contianer element with id '#footer' present in the main single-spa-index.html page.
                      </p>
                      <p>  The template is added to the container as the innerHTML in the bootstrap lifecycle method of the footer-app which is exported by the footer-app.js.</p>
                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <p className="title is-4">Main App</p>
                    <p>This is the part which comes from the about-app and home-app. Home app is mounted when the route is /home and about app is mounted on /about/** route. Both the apps are mounted on the same container with is '#main' in the single-spa-index.html.</p>
                    <br />
                    <p>Home app is created using react and single-spa-react which provides the lifecycle methods for this child app. It is unmounted as soon as user clicks on about tab.</p>
                    <br />
                    <p>About app, which is created using Angular and its single-spa-angular2 wrapper, has three child routes namely, about me, about project and contact. This routing solely belongs to the angular app and is handled by it. This app is unmounted as soon as the user clicks on home link. So at a given time, only one of these two apps is mounted on the #main container.</p>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}