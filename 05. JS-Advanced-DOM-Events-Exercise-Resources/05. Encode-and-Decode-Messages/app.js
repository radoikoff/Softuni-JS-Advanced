// function encodeAndDecodeMessages() {

//     document.getElementById('main').addEventListener('click', onClick);

//     const source = document.getElementById('main').firstElementChild.querySelector('textarea');
//     const dest = document.getElementById('main').lastElementChild.querySelector('textarea');

//     function onClick(e) {
//         if (e.target.textContent == 'Encode and send it') {
//             let msg = [...source.value].reduce((acc, cur) => acc += String.fromCharCode(cur.charCodeAt() + 1), '');
//             dest.value = msg;
//             source.value = '';
//         }

//         if (e.target.textContent == 'Decode and read it') {
//             let msg = [...dest.value].reduce((acc, cur) => acc += String.fromCharCode(cur.charCodeAt() - 1), '');
//             dest.value = msg;
//         }

//     }
// }

function encodeAndDecodeMessages() {

    let encodeBtn = document.querySelectorAll('button')[0];
    let dencodeBtn = document.querySelectorAll('button')[1];
    let source = document.querySelectorAll('textarea')[0];
    let dest = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', onClickEncode);
    dencodeBtn.addEventListener('click', onClickDecode);

    function onClickEncode() {
        let msg = [...source.value].reduce((acc, cur) => acc += String.fromCharCode(cur.charCodeAt() + 1), '');
        dest.value = msg;
        source.value = '';
    }

    function onClickDecode() {
        let msg = [...dest.value].reduce((acc, cur) => acc += String.fromCharCode(cur.charCodeAt() - 1), '');
        dest.value = msg;
    }

}
