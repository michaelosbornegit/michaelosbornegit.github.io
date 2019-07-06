import './landing-page.css';

// Logic for the fullscreen landing page before the user does anything

// Creates and returns the landing page.
function landingPage() {
  // Main container
  const container = document.createElement('div');
  container.classList.add('landing-container');

  // make full screen TODO make responsive to window resizes
  container.style.width = window.innerWidth + 'px';
  container.style.height = window.innerHeight + 'px';

  let widthHeightRatio = window.innerWidth / window.innerHeight;

  // Name container
  const nameContainer = document.createElement('div');
  nameContainer.classList.add('name-container');

  // also size name container to the window size starting out
  nameContainer.style.width = window.innerWidth + 'px';
  nameContainer.style.height = window.innerHeight + 'px';

  // Name display
  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = 'Michael Osborne'

  // Put everything together
  nameContainer.appendChild(name);

  container.appendChild(nameContainer);


  let lastKnownScrollPos = 0;
  let ticking = false;
  
  // listen for scrolls and move name accordingly
  window.addEventListener('scroll', (e) => {
    lastKnownScrollPos = window.scrollY;

    nameContainer.style.width = window.innerWidth - lastKnownScrollPos + 'px';
    nameContainer.style.height = window.innerHeight - lastKnownScrollPos + 'px';
    nameContainer.style.top = lastKnownScrollPos + 'px';

    // gate the actual update behind requestAnimationFrame
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // do things here
        // console.log(lastKnownScrollPos);
        

        ticking = false;
      });

      ticking = true;
    }

    
  })

  return container;
}

export {
  landingPage,
};