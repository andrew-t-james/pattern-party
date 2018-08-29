const navMenu = document.querySelector('.nav-bar');
const accordionTabs = document.querySelector('.accordion-tabs');
const radioButtons = document.getElementsByTagName('input');

const menuToggle = () => {
  const navBarLinkSection = document.querySelector('.nav-bar-link-section');
  if (navBarLinkSection.style.display === 'none' && window.outerWidth < 1400 ) {
    navBarLinkSection.style.display = 'block';
  } else if (window.outerWidth < 1400) {
    navBarLinkSection.style.display = 'none';
  }
};

const toggleImage = event => {
  const plusSign = document.querySelectorAll('.tab-plus-sign');
  console.log(plusSign.forEach(sign => console.log(sign.parentNode.previousSibling.previousSibling.checked)));
  if (event.target.tagName === 'INPUT' && event.target.checked) {

  }
};

accordionTabs.addEventListener('click', toggleImage);
navMenu.addEventListener('click', menuToggle);