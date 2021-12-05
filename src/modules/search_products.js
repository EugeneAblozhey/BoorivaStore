

const getResource = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const getAllProducts = async () => {
    const res = await getResource('https://booriva-store.herokuapp.com/api/tutorials');

    return res;
}

const reduceSearchData = (e, products) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredProducts = products.filter((item) => {
        return item.title.toLowerCase().includes(searchValue);
    })

    return filteredProducts;
}

const renderSearchResults = async (event) => {
    let data = await getAllProducts();
    data = reduceSearchData(event, data);
    const searchContainer = document.querySelector('.modal-search__list');
    if(data.length > 0){
        searchContainer.innerHTML = ``;
        data.forEach(item => {
            searchContainer.innerHTML += `
                <li class="modal-search__item">
                    <a href="description.html?product=${item.id}" class="modal-search__link">${item.title}</a>
                </li>
            `;
        })
    }
}

export {renderSearchResults};