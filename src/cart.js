import "./styles/main.scss";

// Изменение картинки при наведении

import {changeImage} from "./modules/change_image";
import {renderProductCard} from "./modules/cart_module";
import {renderSearchResults} from "./modules/search_products";

renderProductCard();

document.querySelector('.header__logo').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/logos/logo-hover.svg');
})
document.querySelector('.header__logo').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/logos/logo.svg');
})
document.querySelector('.header__search').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_search-hover.svg');
})
document.querySelector('.header__search').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_search.svg');
})
document.querySelector('.header__fav-link').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desktop_favourite-hover.svg');
})
document.querySelector('.header__fav-link').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desktop_favourite.svg');
})
document.querySelector('.header__cart-link').addEventListener('mouseover', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_bag-hover.svg');
})
document.querySelector('.header__cart-link').addEventListener('mouseout', (e) => {
    changeImage(e, 'images/icons/icons-header-desctop/desctop_bag.svg');
})

// HeaderSubMenu

document.querySelector('.menu__item-top').addEventListener('mouseover', (e) => {
    e.preventDefault();   
    const subMenuBottom = document.querySelector('.header__sub-menu-bottom');
    const subMenuTop = document.querySelector('.header__sub-menu-top');
    if(!subMenuBottom.classList.contains('display-none')){
        subMenuBottom.classList.add('display-none');
    }
    subMenuTop.classList.remove('display-none');
})
document.querySelector('.menu__item-bottom').addEventListener('mouseover', (e) => {
    const subMenuBottom = document.querySelector('.header__sub-menu-bottom');
    const subMenuTop= document.querySelector('.header__sub-menu-top');
    if(!subMenuTop.classList.contains('display-none')){
        subMenuTop.classList.add('display-none');
    }
    subMenuBottom.classList.remove('display-none');
})
window.addEventListener('mouseout', (e) => {
    const header = document.querySelector('.header');
    const subMenuTop = document.querySelector('.header__sub-menu-top');
    const subMenuBottom = document.querySelector('.header__sub-menu-bottom');
    if(!header.contains(e.target)){
        if(!subMenuTop.classList.contains('display-none')){
            subMenuTop.classList.add('display-none');
        }
        if(!subMenuBottom.classList.contains('display-none')){
            subMenuBottom.classList.add('display-none');
        }
    }
})


// BurgerMenu

document.querySelector('.mobile-menu__burger-button').addEventListener('click', (e) => {
    e.preventDefault();
    const burger = document.querySelector('.burger');
    burger.classList.remove('display-none');
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
})
document.querySelector('.burger__close-button').addEventListener('click', (e) => {
    e.preventDefault();
    const burger = document.querySelector('.burger');
    burger.classList.add('display-none');
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
})
document.querySelector('.sub-menu__link').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.remove('display-none');
})
document.querySelector('.sub-menu__close-button').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.add('display-none');
    const burger = document.querySelector('.burger');
    burger.classList.add('display-none');
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
})
document.querySelector('.comeback-link').addEventListener('click', (e) => {
    e.preventDefault();
    const subMenu = document.querySelector('.sub-menu');
    subMenu.classList.add('display-none');
})

//////////////

//Search-modal

document.querySelector('.header__search').addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('.search-modal');
    const body = document.querySelector('body');
    modal.classList.remove('display-none');
    body.classList.add('overflow-hidden');
})

document.querySelector('.search-modal__close-button').addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('.search-modal');
    const body = document.querySelector('body');
    modal.classList.add('display-none');
    body.classList.remove('overflow-hidden');
})

document.querySelector('#search-input').addEventListener('input', renderSearchResults);