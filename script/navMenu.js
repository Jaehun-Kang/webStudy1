document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.nav__left-content--pages--menu');
  const main = document.getElementById('main');
  const footer = document.getElementById('footer');
  const menuPage = document.getElementById('menu-page');

  const widthChange = () => {
    if (menuButton.classList.contains('open')) {
      if (window.innerWidth >= 990) {
        main.style.display = 'block';
        footer.style.display = 'block';
        menuPage.style.display = 'none';
      } else {
        main.style.display = 'none';
        footer.style.display = 'none';
        menuPage.style.display = 'block';
      }
    } else {
      if (window.innerWidth >= 990) {
        main.style.display = 'block';
        footer.style.display = 'block';
        menuPage.style.display = 'none';
      } else {
        main.style.display = 'block';
        footer.style.display = 'block';
        menuPage.style.display = 'none';
      }
    }
  };

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    widthChange();
  });

  widthChange();

  window.addEventListener('resize', widthChange);
});
