const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

const navToggle = () => {
  btn.classList.toggle('open');
  nav.classList.toggle('menu-open');
  document.body.classList.toggle('no-scroll');
};

btn.addEventListener('click', navToggle);
