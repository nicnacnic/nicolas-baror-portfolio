async function load(config) {
    try {
        let container = document.querySelector('.gallery-container');

        for (let i = 0; i < config.gallery.length; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'gallery-section-container');
            let header = document.createElement('h2');
            header.innerHTML = config.gallery[i].title;
            let content = await generateGallery(config.gallery[i].content, config.gallery[i].title);
            div.appendChild(header);
            div.innerHTML += content;
            container.appendChild(div);
        }
    } catch { };
}

async function generateGallery(items, name) {
    return new Promise((resolve) => {
        let html = '';
        for (let i = 0; i < items.length; i++) {
            html += `<div class="gallery-image onClick="" name="${name}" ${(i > 3) ? "hidden" : ""}" index="${i}">
                    <img src="${items[i].image}" alt="${items[i].name}"></img>
                <a class="hover-container" onClick="" href="${items[i].url}" data-link>
                    <h3>${items[i].name}</h3>
                </a>
            </div>`
            if (i >= items.length - 1) return resolve(html);
        }
    })
}

{/* <div class="gallery-image" index="0">
    <img src="" alt=""></img>
    <div class="hover-container">
        <h3></h3>
    </div>
</div> */}