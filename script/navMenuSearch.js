document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector(
    '.nav__left-content--pages--search'
  );
  const closeButton = document.querySelector('.close-button');
  const menuButton = document.querySelector('.nav__left-content--pages--menu');
  const searchInput = document.querySelector('.search-input');
  const vulfpeck = document.querySelector('.vulfpeck');
  const chill = document.querySelector('.chill');
  const hiphop = document.querySelector('.hiphop');
  const electronic = document.querySelector('.electronic');
  const indie = document.querySelector('.indie');
  const funk = document.querySelector('.funk');
  const rnb = document.querySelector('.rnb');
  const rock = document.querySelector('.rock');
  const mainPage = document.getElementById('main-page');
  const main = document.getElementById('main');
  const footer = document.getElementById('footer');
  const menuPage = document.getElementById('menu-page');
  const searchPage = document.getElementById('search-page');

  const widthChange = () => {
    if (searchPage.style.display === 'grid') {
      main.style.display = 'none';
      footer.style.display = 'none';
      menuPage.style.display = 'none';
    } else if (menuButton.classList.contains('open')) {
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

  searchButton.addEventListener('click', () => {
    mainPage.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    menuPage.style.display = 'none';
    menuButton.classList.remove('open');
    searchPage.style.display = 'grid';
  });

  closeButton.addEventListener('click', () => {
    searchPage.style.display = 'none';
    mainPage.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'block';
    widthChange();
  });

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    widthChange();
  });

  window.addEventListener('resize', widthChange);

  widthChange();

  vulfpeck.addEventListener('click', () => {
    searchInput.value = 'vulfpeck';
  });
  chill.addEventListener('click', () => {
    searchInput.value = 'chill';
  });
  hiphop.addEventListener('click', () => {
    searchInput.value = 'hiphop';
  });
  electronic.addEventListener('click', () => {
    searchInput.value = 'electronic';
  });
  indie.addEventListener('click', () => {
    searchInput.value = 'indie';
  });
  funk.addEventListener('click', () => {
    searchInput.value = 'funk';
  });
  rnb.addEventListener('click', () => {
    searchInput.value = 'r&b';
  });
  rock.addEventListener('click', () => {
    searchInput.value = 'rock';
  });
});
