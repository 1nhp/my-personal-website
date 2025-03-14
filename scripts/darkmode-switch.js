const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('theme');
});