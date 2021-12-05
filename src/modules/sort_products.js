



const getFilterProducts = (minPrice, maxPrice) => {
    fetch('https://booriva-store.herokuapp.com/api/tutorials')
    .then(
        (response) => {
            return response.json();
        }
    )
    .then(
        (data)=>{
            let view = '';

            const containerProducts = document.querySelector('.category-body__cards');
        
            const filterProducts = data.filter(item => {
                return item.price > minPrice && item.price < maxPrice;
            })
        
            filterProducts.forEach((item) => {
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
    )
}

export {getFilterProducts};















