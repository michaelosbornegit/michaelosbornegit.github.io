import './main-content.css';

// Logic for the main content below the landing page

// Creates and returns the main content.
function mainContent() {
  // just text for now
  const placeholder = document.createElement('div');
  placeholder.classList.add('below-landing');
  placeholder.innerHTML = 'placeholder text for below the landing page!'

  return placeholder;
}

export {
  mainContent,
};