document.addEventListener('DOMContentLoaded', () => {
  const langFolderSelection = document.querySelector(
    '.footer-content__bottom--right--language--selected'
  );
  const langFolderItems = document.querySelector(
    '.footer-content__bottom--right--language--unselected'
  );
  const langArrowRotation = document.querySelector(
    '.footer-content__bottom--right--language--selected--arrow'
  );
  const langFolderSelection1 = document.querySelector(
    '.footer-content__bottom--right--language--selected1'
  );
  const langFolderItems1 = document.querySelector(
    '.footer-content__bottom--right--language--unselected1'
  );
  const langArrowRotation1 = document.querySelector(
    '.footer-content__bottom--right--language--selected--arrow1'
  );
  const langItems = document.getElementById('lang-items');
  const langItems1 = document.getElementById('lang-items1');

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

  langFolderSelection1.addEventListener('click', (event) => {
    event.stopPropagation();

    if (langFolderSelection1.classList.contains('lang-selected')) {
      langFolderSelection1.classList.remove('lang-selected');
      langArrowRotation1.classList.toggle('rotate');
      langItems1.style.display = 'none';
    } else {
      langFolderSelection1.classList.add('lang-selected');
      langItems1.style.display = 'grid';
      langArrowRotation1.classList.toggle('rotate');
    }
  });

  document.addEventListener('click', (event) => {
    if (!langFolderItems1.contains(event.target)) {
      langFolderSelection1.classList.remove('lang-selected');
      langArrowRotation1.classList.remove('rotate');
      langItems1.style.display = 'none';
    }
  });
});
