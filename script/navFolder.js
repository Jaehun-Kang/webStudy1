document.addEventListener('DOMContentLoaded', () => {
    const navFolderSelection = document.querySelector('.nav__left-content--pages--discover-music--folder');
    const navFolderItems = document.querySelector('.nav__left-content--pages--discover-music--items');
    const navArrowRotation = document.querySelector('.nav-arrow');
    const navItems = document.getElementById('nav-items');

    navFolderSelection.addEventListener('click', (event) => {
        event.stopPropagation();

        if (navFolderSelection.classList.contains('nav-selected')) {
            navFolderSelection.classList.remove('nav-selected');
            navArrowRotation.classList.toggle('rotate');
            navItems.style.display = 'none';

        } else {
            navFolderSelection.classList.add('nav-selected');
            navItems.style.display = 'block';
            navArrowRotation.classList.toggle('rotate');
        }
    });

    document.addEventListener('click', (event) => {
        if (!navFolderItems.contains(event.target)) {
            navFolderSelection.classList.remove('nav-selected');
            navArrowRotation.classList.remove('rotate');
            navItems.style.display = 'none';
        }
    });
});