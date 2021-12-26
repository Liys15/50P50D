const auds = document.querySelectorAll('audio');
const boards = document.querySelectorAll('.board');

boards.forEach((board, idx) => {
    board.addEventListener('click', () => {
        auds.forEach((aud) => {
            aud.pause();
            aud.currentTime = 0;
        })
        auds[idx].play();
    })
})