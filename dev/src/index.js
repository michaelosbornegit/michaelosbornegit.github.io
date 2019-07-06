import _ from 'lodash';
import { landingPage } from './landing-page.js';
import { mainContent } from './main-content.js';
import './index.css';

function main() {
  document.body.appendChild(landingPage());
  document.body.appendChild(mainContent());
}

window.onload = () => {
  main();
}