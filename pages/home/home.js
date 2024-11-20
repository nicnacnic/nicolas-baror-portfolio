async function load(config) {

    // config.carouselImgs.forEach(img => {
    //     carousel.innerHTML += `<div class="carousel-slide" style="background-image: url('${img}');"></div>`
    // });
    
    let carousel = document.querySelector('section .carousel');
    let carouselSlides = document.querySelectorAll('.carousel-slide');

    carousel.style.width = `${carouselSlides.length}00%`;

    let imgIndex = 1;
    let num = 100 / carouselSlides.length;
    setInterval(() => {
        if (imgIndex >= carouselSlides.length) {
            carousel.style.transform = `none`
            imgIndex = 1;
        }
        else {
            carousel.style.transform = `translateX(-${imgIndex * num}%)`
            imgIndex++;
        }
    }, 6000)
}