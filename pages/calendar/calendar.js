async function load(config) {

    iframeStr = `https://open-web-calendar.hosted.quelltext.eu/calendar.html?specification_url=${window.location.protocol + '//' + window.location.host + '/calendar-config.json'}`
    console.log(iframeStr)
  
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