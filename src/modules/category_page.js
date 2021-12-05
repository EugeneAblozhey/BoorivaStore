

const generateAllProducts = (allProducts) => {
    let view = '';

    const containerProducts = document.querySelector('.category-body__cards');

    allProducts.forEach((item) => {
        view += `
            <a href="./description.html?product=${item.id}" class="category-body__column">
                <article class="product-item">
                    <div class="product-item__image">
                        <img src="${item.src}" alt="${item.title}">
                    </div>
                    <div class="product-item__description">
                        <div class="product-item__name">${item.title}</div>
                        <div class="product-item__price">${item.price}₴</div>
                    </div>
                </article>
            </a>
        `
    })

    containerProducts.innerHTML = view;
}

const getProducts = () => {
    fetch('https://booriva-store.herokuapp.com/api/tutorials')
    .then(
        (response) => {
            return response.json();
        }
    )
    .then(
        (data)=>{
            generateAllProducts(data);
        }
    )
}

export {getProducts};