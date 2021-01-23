function toggle() {
    let visibility = document.querySelector('#extra').style.display;
    let btnName = '';

    if (visibility == '' || visibility == 'none') {
        visibility = 'block';
        btnName = "Less";
    } else {
        visibility = 'none';
        btnName = "More";
    }

    document.querySelector('#extra').style.display = visibility;
    document.querySelector('.button').textContent = btnName;
}