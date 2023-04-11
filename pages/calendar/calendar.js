async function load(config) {
    let iframeStr = 'https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=';
    let newArray = [];
    config.calendars.forEach(calendar => {
        newArray.push(encodeURIComponent(calendar))
    })
    iframeStr += newArray.join('&amp;url=') + '&amp;title=Nicolas%20Baror%20Calendar&amp;skin=dhtmlxscheduler.css&amp;tab=week';
    document.querySelector('.calendar-section').innerHTML += 
        `    <iframe id="open-web-calendar" 
        style="background:url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;"
        src="${iframeStr}"
        sandbox="allow-scripts allow-same-origin allow-top-navigation"
        allowTransparency="true" scrolling="no" 
        frameborder="0"></iframe>
    `;
    document.querySelector('.timezone-text').innerHTML += new window.Intl.DateTimeFormat().resolvedOptions().timeZone
}