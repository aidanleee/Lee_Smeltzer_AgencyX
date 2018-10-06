(() => {

    // variables

    let lightbox = document.querySelector('.lightbox'),
        closeLBox = lightbox.querySelector('.close-lightbox'),
        button = document.querySelector('a');
         
    // functions

    function showLightbox() {
        lightbox.classList.add('show-lightbox');
    }

    function closeLightbox() {
        lightbox.classList.remove('show-lightbox');
    }

    // event handling
    button.addEventListener('click', showLightbox);
    closeLBox.addEventListener('click', closeLightbox);


})();