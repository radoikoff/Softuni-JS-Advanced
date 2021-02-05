function addItem() {
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const dropdown = document.getElementById('menu');

    const opt = document.createElement('option');
    opt.textContent = textElement.value;
    opt.value = valueElement.value;
    dropdown.appendChild(opt);

    textElement.value = '';
    valueElement.value = '';

}