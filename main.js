const loader = document.querySelector('.loader');

const fade = setInterval(() => {
    if(!loader.style.opacity) {
        loader.style.opacity = 1;
    }
    if(loader.style.opacity > 0) {
        loader.style.opacity -= 0.1;
    } else {
        clearInterval(fade);
    }
}, 200);