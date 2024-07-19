document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-content__desc5')
    const page1 = document.querySelectorAll('.main-content__desc5--1');
    const page2 = document.querySelectorAll('.main-content__desc5--2');
    const btn1 = document.querySelectorAll('.btn1');
    const btn2 = document.querySelectorAll('.btn2');

    const showPage1 = () => {
        btn1.forEach(btn => btn.classList.add('btn-selected'));
        btn2.forEach(btn => btn.classList.remove('btn-selected'));
        page2.forEach(page => {
            page2.forEach(page => page.style.opacity = '0');
            page2.forEach(page => page.style.zindex = '0');
        });
    };
    
    const showPage2 = () => {
        btn1.forEach(btn => btn.classList.remove('btn-selected'));
        btn2.forEach(btn => btn.classList.add('btn-selected'));
        page2.forEach(page => {
            page2.forEach(page => page.style.opacity = '1');
            page2.forEach(page => page.style.zindex = '1');
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