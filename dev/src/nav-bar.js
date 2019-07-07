import './nav-bar.css';

// Logic for the main content below the landing page

// Creates and returns the nav bar
function navBar() {
  const bar = document.createElement('div');
  bar.classList.add('bar');

  const name = document.createElement('div');
  name.classList.add('title-name');
  name.innerHTML = 'Michael Osborne';

  bar.appendChild(name);

  return bar;
}

export {
  navBar,
};