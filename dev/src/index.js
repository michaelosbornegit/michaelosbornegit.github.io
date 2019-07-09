import {
  landingPage as buildLandingPage
} from './landing-page.js';
import {
  mainContent as buildMainContent
} from './main-content.js';
import {
  navBar
} from './nav-bar.js';
import './index.css';

// construct things
const bar = navBar();
const mainContent = buildMainContent();
const landingPage = buildLandingPage();

function main() {

  document.body.appendChild(mainContent);
  document.body.appendChild(bar);
  document.body.appendChild(landingPage);

  // true if the user is at the top and has not scrolled down
  let showingLanding = true;

  window.addEventListener('wheel', (e) => {

    // console.log('hello world');
    // console.log(event.deltaY);

    if (showingLanding && event.deltaY > 0) {
      // User mouse wheeled, show everything
      hideLandingPage();

      showingLanding = false;
    } else if (!showingLanding && event.deltaY < 0) {

      console.log('going up!!');
      
      showLandingPage();

      showingLanding = true;
    }


  })

  window.addEventListener('mousedown', (e) => {
    hideLandingPage();

    showingLanding = false;
  }) 

}

function hideLandingPage() {
  landingPage.classList.remove('landing-container-show');
  landingPage.classList.add('landing-container-hide');
}

function showLandingPage() {
  landingPage.classList.remove('landing-container-hide');
  // landingPage.classList.add('landing-container-show');
}

window.onload = () => {
  main();
}