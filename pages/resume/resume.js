async function load(config) {
    try {
        let container = document.querySelector('.resume-container');

        for (let i = 0; i < config.resumes.length; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'resume-section-container');

            let header = document.createElement('h2');
            header.innerHTML = config.resumes[i].title;

            let embed = document.createElement('embed');
            embed.src = `${config.resumes[i].path}#toolbar=0&navpanes=0&scrollbar=0&zoom=70`;

            let button = document.createElement('a');
            button.classList.add('button');
            button.href = config.resumes[i].path;
            button.target = '_blank'
            button.innerHTML = 'Download PDF'

            div.appendChild(header);
            div.appendChild(embed);
            div.appendChild(button)
            container.appendChild(div);
        }
    } catch(e) { console.error(e) };
}

{/* <div class="resume-section-container">
    <embed src="/assets/resumes/Nicolas_Baror_Resume_Lighting.pdf#toolbar=0&navpanes=0&scrollbar=0" width="510" height="640.5"
        type="application/pdf">
        <a class="button" href="/assets/resumes/Nicolas_Baror_Resume_Lighting.pdf">Resume</a>
</div> */}