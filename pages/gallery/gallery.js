async function load(config) {
    try {
        let container = document.querySelector('.gallery-pane-container');

        let list = config.gallery.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });

        let transitionDelay = 0;

        for (let i = 0; i < list.length; i++) {
            container.innerHTML += `<div class="gallery-image onClick="" name="" ${(i > 3) ? "hidden" : ""}" index="${i}">
                    <img src="${list[i].image}" alt="${list[i].name}"></img>
                <a class="hover-container" onClick="" href="${list[i].url}" data-link>
                    <h3>${list[i].name}</h3>
                    <h2><i>${list[i].role}</i></h2>
                </a>
            </div>`
            transitionDelay += 250;
        }
        // let div = document.createElement('div');
        // div.setAttribute('class', 'gallery-section-container');
        // let header = document.createElement('h2');
        // header.innerHTML = 'test';
        // let content = await generateGallery(config.gallery);
        // div.appendChild(header);
        // div.innerHTML += content;

        let hiddenContainers = container.querySelectorAll('.gallery-image');
        let index = 0;
        let showInterval = setInterval(() => {
            hiddenContainers[index].style.transition = 'opacity 500ms';
            hiddenContainers[index].style.opacity = '100';
            if (index >= hiddenContainers.length - 1) return clearInterval(showInterval);
            index++;
        }, 100)
    } catch { };
}

async function sortGallery() {
    let filterMethod = document.querySelector('.gallery-filter-select').options[document.querySelector('.gallery-filter-select').selectedIndex].value;
    let sortMethod = document.querySelector('.gallery-sort-select').options[document.querySelector('.gallery-sort-select').selectedIndex].value;
    let list = [];
    if (sortMethod === 'date-ascending') list = config.gallery.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    });
    else if (sortMethod === 'date-descending') list = config.gallery.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
    else if (sortMethod === 'show-ascending') list = config.gallery.sort((a, b) => { return a.name.localeCompare(b.name) });
    else if (sortMethod === 'show-descending') list = config.gallery.sort((a, b) => { return b.name.localeCompare(a.name) });

    let container = document.querySelector('.gallery-pane-container');
    container.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        if (filterMethod === 'all' || list[i].group === filterMethod)
        container.innerHTML += `<div class="gallery-image onClick="" name="" ${(i > 3) ? "hidden" : ""}" index="${i}">
                <img src="${list[i].image}" alt="${list[i].name}"></img>
            <a class="hover-container" onClick="" href="${list[i].url}" data-link>
                <h3>${list[i].name}</h3>
                <h2><i>${list[i].role}</i></h2>
            </a>
        </div>`
    }

    let hiddenContainers = container.querySelectorAll('.gallery-image');
    let index = 0;
    let showInterval = setInterval(() => {
        hiddenContainers[index].style.transition = 'opacity 500ms';
        hiddenContainers[index].style.opacity = '100';
        if (index >= hiddenContainers.length - 1) return clearInterval(showInterval);
        index++;
    }, 100)
}