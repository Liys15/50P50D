const textarea = document.getElementById('choicesInput');
const choicesOutput = document.getElementById('choicesOutput');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags();

    if (e.key === 'Enter') {
        // setTimeout(() => {
            
        // }, 10);

        randomSelect();
    }
})


function createTags() {
    const tags = textarea.value.split(',').filter(item => item.trim() != '').map(tag => tag.trim());
    
    choicesOutput.innerHTML = '';

    tags.forEach(tagText => {
        const tag = document.createElement("div");
        tag.className = "choice";
        tag.innerText = `${tagText}`;
        choicesOutput.appendChild(tag);
    });
}

function randomSelect() {
    const tags = document.querySelectorAll('.choice');
    const countTimes = 5;

    const interval = setInterval(() => {
        const randomTag = tags[Math.floor(Math.random() * tags.length)];

        if (randomTag !== undefined) {
            randomTag.classList.add('picked');
        }

        setTimeout(() => {
            randomTag.classList.remove('picked');
        }, 1000);

    }, 1000)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = tags[Math.floor(Math.random() * tags.length)];
            randomTag.classList.add('picked');
        }, 1000);

    }, countTimes * 1000)
}