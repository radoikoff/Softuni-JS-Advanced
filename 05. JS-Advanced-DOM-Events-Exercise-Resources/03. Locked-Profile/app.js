function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const isLocked = ev.target.parentNode.querySelector('input[value="lock"]').checked;
            const info = ev.target.parentNode.querySelector('div');
            console.log(isLocked, info.style.display);
            if (!isLocked && info.style.display == '') {
                info.style.display = 'block';
                ev.target.textContent = 'Hide it'
            } else if (!isLocked && info.style.display == 'block') {
                info.style.display = '';
                ev.target.textContent = 'Show more'
            }
        }
    }
}