const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
const perView = 3;
let totalScroll = 0;
const delay = 1000;

imageWrapper.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl =
    document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.3s';
}

// Navbar Sticky
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scroll-navbar', 'scrolled');
  } else {
    navbar.classList.remove('scroll-navbar', 'scrolled');
  }
});

// Sticky Icon
const parentIcon = document.getElementById('parentIcon');
const childIcons = document.getElementById('childIcons');
const whatsappIcon = document.getElementById('whatsappIcon');
const instagramIcon = document.getElementById('instagramIcon');

parentIcon.addEventListener('click', () => {
  childIcons.classList.toggle('show');
});
