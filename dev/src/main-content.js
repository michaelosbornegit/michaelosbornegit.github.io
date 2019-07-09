import './main-content.css';

// Logic for the main content below the landing page

// Creates and returns the main content.
function mainContent() {
  // just text for now
  const placeholder = document.createElement('div');
  placeholder.classList.add('main-content-container');

  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));
  placeholder.appendChild(document.createElement('div'));

  return placeholder;
}

export {
  mainContent,
};