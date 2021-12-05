// Изменение картинки при наведении

const changeImage = (e, newImage) => {
    if(e.target.tagName === 'IMG'){
        e.target.src = newImage;
    }
    if(e.target.tagName === 'A'){
        e.target.firstElementChild.src = newImage;
    }
    if(e.target.tagName === 'SPAN'){
        e.target.previousElementSibling.src = newImage;
    }
}

export {changeImage};