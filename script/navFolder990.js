document.addEventListener('DOMContentLoaded', () => {
  const navFolderSelection = document.querySelector(
    '.menu__links--folder--opener'
  );
  const navFolderItems = document.querySelector('.menu__links--folder--items');
  const navArrowRotation = document.querySelector('.nav-arrow1');
  const navItems = document.getElementById('nav-items1');

  navFolderSelection.addEventListener('click', (event) => {
    event.stopPropagation();

    if (navFolderSelection.classList.contains('nav-selected')) {
      navFolderSelection.classList.remove('nav-selected');
      navArrowRotation.classList.toggle('rotate');
      navItems.style.maxHeight = 0;
      navItems.style.paddingTop = 0;
      // navItems.style.opacity = 0;
      // navItems.style.display = 'none';
    } else {
      navFolderSelection.classList.add('nav-selected');
      navItems.style.maxHeight = '200px';
      navItems.style.paddingTop = '1.25rem';
      // navItems.style.opacity = 1;
      // navItems.style.display = 'block';
      navArrowRotation.classList.toggle('rotate');
    }
  });

  document.addEventListener('click', (event) => {
    if (!navFolderItems.contains(event.target)) {
      navFolderSelection.classList.remove('nav-selected');
      navArrowRotation.classList.remove('rotate');
      navItems.style.maxHeight = 0;
      navItems.style.paddingTop = 0;
      // navItems.style.opacity = 0;
      // navItems.style.display = 'none';
    }
  });
});
