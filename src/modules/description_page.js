const PRODUCTS_DATA = 'https://booriva-store.herokuapp.com/api/tutorials'

const getResource = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const getProducts = async (id) =>{
    const res = await getResource(`${PRODUCTS_DATA}/${id}`);
    return res;
}

const renderDescription = async () => {
    const id = window.location.search.split('?product=')[1];

    const productImageContainer = document.querySelector('.description__big-image');
    const productTitleContainer = document.querySelector('.description__title');
    const productPriceContainer = document.querySelector('.description__price');
    productImageContainer.innerHTML = '';
    productTitleContainer.innerHTML = '';
    productPriceContainer.innerHTML = '';
    const productsData = await getProducts(id);

    productImageContainer.innerHTML = `
        <img src="${productsData.src}" alt="${productsData.title}">
    `;
    productTitleContainer.innerHTML = `
        <h3>
            ${productsData.title}
        </h3>
    `;
    productPriceContainer.innerHTML = `
        ${productsData.price} ₴
    `;
}


export {PRODUCTS_DATA, getResource, getProducts, renderDescription}











