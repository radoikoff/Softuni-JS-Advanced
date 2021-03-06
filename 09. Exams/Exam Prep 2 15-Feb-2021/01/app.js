function solution() {
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');


    function addGift() {
        const value = input.value;
        input.value = '';

        const li = e('li', value, 'gift');
        li.name = value;
        const sendBtn = e('button', 'Send', 'sendButton');
        sendBtn.addEventListener('click', () => sentGift(li));
        const discardBtn = e('button', 'Discard', 'discardButton');
        discardBtn.addEventListener('click', () => removeGift(li));

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        gifts.appendChild(li);

        sortGifts();
    }


    function sentGift(gift) {
        const sentGift = e('li', gift.childNodes[0].textContent, 'gift');
        gift.remove();
        sent.appendChild(sentGift);
    }

    function removeGift(gift) {
        const sentGift = e('li', gift.childNodes[0].textContent, 'gift');
        gift.remove();
        discarded.appendChild(sentGift);
    }

    function sortGifts() {
        Array.from(gifts.children).sort((a, b) => a.name.localeCompare(b.name)).forEach(e => gifts.appendChild(e));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }

}