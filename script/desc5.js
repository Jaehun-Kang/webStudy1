document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-content__desc5')
    const pages = document.querySelectorAll('.main-content__desc5--1, .main-content__desc5--2');
    const btn1 = document.querySelectorAll('.btn1');
    const btn2 = document.querySelectorAll('.btn2');

    const showPage1 = () => {
        btn1.forEach(btn => btn.classList.add('btn-selected'));
        btn2.forEach(btn => btn.classList.remove('btn-selected'));
        pages.forEach(page => {
            if (page.classList.contains('main-content__desc5--1')) {
                container.style.backgroundColor = 'oklch(95.36% 0.2 107.63)';
                page.style.opacity = '1';
                page.style.visibility = 'visible';
                page.style.height = 'auto';
                page.style.padding = '3.125rem'
            } else {
                page.style.opacity = '0.1';
                page.style.visibility = 'hidden';
                page.style.height = '0';
                page.style.padding = '0'
            }
        });
    };
    
    const showPage2 = () => {
        btn1.forEach(btn => btn.classList.remove('btn-selected'));
        btn2.forEach(btn => btn.classList.add('btn-selected'));
        pages.forEach(page => {
            if (page.classList.contains('main-content__desc5--2')) {
                container.style.backgroundColor = 'oklch(69.74% 0.2 42.85)';
                page.style.opacity = '1';
                page.style.visibility = 'visible';
                page.style.height = 'auto';
                page.style.padding = '3.125rem'
            } else {
                page.style.opacity = '0.1';
                page.style.visibility = 'hidden';
                page.style.height = '0';
                page.style.padding = '0'
            }
        });
    };
    
    btn1.forEach(btn1 => {
        btn1.addEventListener('click', showPage1);
    });
    
    btn2.forEach(btn2 => {
        btn2.addEventListener('click', showPage2);
    });
    
    showPage1();
});