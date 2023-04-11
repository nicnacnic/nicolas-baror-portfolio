async function load(config) {
    let carousel = document.querySelector('section .carousel');
    config.carouselImgs.forEach(img => {
        carousel.innerHTML += `<div class="carousel-slide" style="background-image: url('${img}');"></div>`
    });
    carousel.style.width = `${config.carouselImgs.length}00%`;
    
    let imgIndex = 0;
    setInterval(() => {
        if (imgIndex >= config.carouselImgs.length - 1) {
            carousel.style.transform = `none`
            imgIndex = 0;
        }
        else {
            carousel.style.transform = `translateX(-50%)`
            imgIndex++;
        }
    }, 6000)
}