const navMenu = document.querySelector('.nav-bar');

const menuToggle = () => {
  const navBarLinkSection = document.querySelector('.nav-bar-link-section');
  if (navBarLinkSection.style.display === 'none' && window.outerWidth < 1400 ) {
    navBarLinkSection.style.display = 'block';
  } else if (window.outerWidth < 1400) {
    navBarLinkSection.style.display = 'none';
  }
};

navMenu.addEventListener('click', menuToggle);