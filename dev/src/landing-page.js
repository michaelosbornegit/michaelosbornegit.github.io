import './landing-page.css';

// Logic for the fullscreen landing page before the user does anything

// Creates and returns the landing page.
function landingPage() {
  const container = document.createElement('div');
  container.classList.add('landing-container');

  // landing page background
  const background = document.createElement('div');
  background.classList.add('landing-background');

  // make full screen TODO make responsive to window resizes
  // background.style.width = window.innerWidth + 'px';
  // background.style.height = window.innerHeight + 'px';


  // Name container
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('name-container');

  // // also size name container to the window size starting out
  // nameContainer.style.width = window.innerWidth + 'px';
  // nameContainer.style.height = window.innerHeight + 'px';


  // Name display
  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = 'Michael Osborne'


  // Put everything together
  container.appendChild(nameContainer);
  container.appendChild(background);
  
  nameContainer.appendChild(name);

  return container;
}

export {
  landingPage,
};