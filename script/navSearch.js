document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.nav__left-content--pages--search');
    const closeButton = document.querySelector('.close-button');
    const searchInput = document.querySelector('.search-input');
    const vulfpeck = document.querySelector('.vulfpeck');
    const chill = document.querySelector('.chill');
    const hiphop = document.querySelector('.hiphop');
    const electronic = document.querySelector('.electronic');
    const indie = document.querySelector('.indie');
    const funk = document.querySelector('.funk');
    const rnb = document.querySelector('.rnb');
    const rock = document.querySelector('.rock');

    searchButton.addEventListener('click', () => {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('search-page').style.display = 'grid';
    });

    closeButton.addEventListener('click', () => {
        document.getElementById('main-page').style.display = 'block';
        document.getElementById('search-page').style.display = 'none';
    });

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