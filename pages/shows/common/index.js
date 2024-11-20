async function load(config) {

    let photos = document.querySelectorAll('.photo-column img');

    photos.forEach((img, index) => {
        if (index + 1 >= photos.length)
            img.setAttribute('nextImg', "0")
        else
            img.setAttribute('nextImg', `${index + 1}`)
        if (index - 1 <= 0)
            img.setAttribute('lastImg', `${photos.length - 1}`)
        else
            img.setAttribute('lastImg', `${index - 1}`)
        img.setAttribute('onClick', 'expandPhoto(this)');
    })

}

function expandPhoto(element) {
    console.log(element.getAttribute('src'))

    let expandImg = document.querySelector('.image-expand-image');
    let expandContainer = document.querySelector('.image-expand-container');

    expandImg.src = element.getAttribute('src');
    expandImg.setAttribute('nextImg', element.getAttribute('nextImg'))
    expandImg.setAttribute('lastImg', element.getAttribute('lastImg'))


    expandImg.addEventListener('load', () => {
        expandContainer.classList.add('visible');
        expandImg.removeEventListener('load', () => {})
    });
}

function nextImage(element) {
    let img = element.parentElement.querySelector('img')
    let photos = document.querySelectorAll('.photo-column img');
    let newImg = photos[img.getAttribute('nextImg')];
    img.src = newImg.getAttribute('src');
    img.setAttribute('nextImg', newImg.getAttribute('nextImg'))
    img.setAttribute('lastImg', newImg.getAttribute('lastImg'))
}

function lastImage(element) {
    let img = element.parentElement.querySelector('img')
    let photos = document.querySelectorAll('.photo-column img');
    let newImg = photos[img.getAttribute('lastImg')];
    img.src = newImg.getAttribute('src');
    img.setAttribute('nextImg', newImg.getAttribute('nextImg'))
    img.setAttribute('lastImg', newImg.getAttribute('lastImg'))
}