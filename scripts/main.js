document.querySelector('.search-open__checkbox').addEventListener('click', (e) => {
    const search = document.querySelector('.search-wrap');

    if (e.target.checked) {
        search.classList.add('search-wrap--show');
    } else {
        search .classList.remove('search-wrap--show');
    }
});
