import {
  landingPage
} from './landing-page.js';
import {
  mainContent
} from './main-content.js';
import {
  navBar
} from './nav-bar.js';
import './index.css';

function main() {
  const bar = navBar();

  document.body.appendChild(landingPage());
  document.body.appendChild(mainContent());
  document.body.appendChild(bar);


  let lastKnownScrollPos = 0;
  let ticking = false;


  // listen for scrolls and move name accordingly
  window.addEventListener('scroll', (e) => {
    lastKnownScrollPos = window.scrollY;


    // gate all updates behind requestAnimationFrame for better performance
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // do things here
        if (lastKnownScrollPos >= window.innerHeight / 2) {
          bar.classList.remove('bar-hide');
          bar.classList.add('bar-show');
        } else {
          bar.classList.add('bar-hide');
        }
        // nameContainer.style.width = window.innerWidth - lastKnownScrollPos + 'px';
        // nameContainer.style.height = window.innerHeight - lastKnownScrollPos + 'px';
        // nameContainer.style.top = lastKnownScrollPos + 'px';


        ticking = false;
      });

      ticking = true;
    }


  })

}

window.onload = () => {
  main();
}