
const addToCart = () => {
    const prodTitle = document.querySelector('.description__title').firstElementChild.innerHTML;
    const prodSrc1 = document.querySelector('.description__big-image').firstElementChild.src;
    const prodSrc = `.${prodSrc1.split('0')[2]}`
    let prodSize = '';
    const sizeButtons = document.querySelectorAll('.description__size-button-inner');

    sizeButtons.forEach(item => {
        if(item.classList.contains('size-button-active')){
            prodSize = item.firstElementChild.innerHTML;
        }
    })

    let prodPrice = document.querySelector('.description__price').innerText;

    // const prodPrice = document.querySelector('.description__price').innerHTML;

    //     let prodArr = [];

    //     let product = {
    //         title: prodTitle,
    //         src: prodSrc,
    //         size: prodSize,
    //         price: prodPrice
    //     }
    
    //     prodArr.push(product);
    
    //     sessionStorage.setItem('products', JSON.stringify(prodArr));
    
    sessionStorage.setItem('title', prodTitle);
    sessionStorage.setItem('src', prodSrc);
    sessionStorage.setItem('size', prodSize);
    sessionStorage.setItem('price', prodPrice);

}

const renderProductCard = () => {
    const card = document.querySelector('.cart__products-inner');
    if(sessionStorage.getItem('title')){
        card.innerHTML = '';
        card.innerHTML = `
        <div class="cart__product-card product-card">
            <div class="product-card__image">
            <img src="${sessionStorage.getItem('src')}" alt="${sessionStorage.getItem('title')}">
            </div>
            <div class="product-card__description">
                <div class="product-card__name">
                    ${sessionStorage.getItem('title')}
                </div>
                <div class="product-card__size">
                    ${sessionStorage.getItem('size')}
                </div>
                <div class="product-card__price">
                    ${sessionStorage.getItem('price')}
                </div>
                <a href="" class="product-card__close-button">
                    <img src="images/cart/delete.svg" alt="">
                </a>
            </div>
        </div>
        <div class="cart__price">
            <div class="cart__order-price">
                <span>Cумма заказа:</span>
                <span class="font-weight-700">${sessionStorage.getItem('price')}</span>
            </div>
            <div class="cart__delivery-price">
                <span>Стоимость доставки:</span>
                <span class="font-weight-700">бесплатно</span>
            </div>
            <div class="cart__final-price">
                <span>К оплате:</span>
                <span class="font-weight-700">${sessionStorage.getItem('price')}</span>
            </div>
        </div>
        `;
    }
}


export {addToCart, renderProductCard};
