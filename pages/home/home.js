async function load(config) {
    let carousel = document.querySelector('section .carousel');
    config.carouselImgs.forEach(img => {
        carousel.innerHTML += `<div class="carousel-slide" style="background-image: url('${img}');"></div>`
    });
    carousel.style.width = `${config.carouselImgs.length}00%`;
    
    let imgIndex = 1;
    let num = 100 / config.carouselImgs.length;
    setInterval(() => {
        if (imgIndex >= config.carouselImgs.length) {
            carousel.style.transform = `none`
            imgIndex = 1;
        }
        else {
            carousel.style.transform = `translateX(-${imgIndex * num}%)`
            imgIndex++;
        }
    }, 6000)
}