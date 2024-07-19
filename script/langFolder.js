document.addEventListener('DOMContentLoaded', () => {
    const langFolderSelection = document.querySelector('.footer-content__bottom--right--language--selected');
    const langFolderItems = document.querySelector('.footer-content__bottom--right--language--unselected');
    const langArrowRotation = document.querySelector('.footer-content__bottom--right--language--selected--arrow');
    const langItems = document.getElementById('lang-items');

    langFolderSelection.addEventListener('click', (event) => {
        event.stopPropagation();

        if (langFolderSelection.classList.contains('lang-selected')) {
            langFolderSelection.classList.remove('lang-selected');
            langArrowRotation.classList.toggle('rotate');
            langItems.style.display = 'none';

        } else {
            langFolderSelection.classList.add('lang-selected');
            langItems.style.display = 'block';
            langArrowRotation.classList.toggle('rotate');
        }
    });

    document.addEventListener('click', (event) => {
        if (!langFolderItems.contains(event.target)) {
            langFolderSelection.classList.remove('lang-selected');
            langArrowRotation.classList.remove('rotate');
            langItems.style.display = 'none';
        }
    });
});