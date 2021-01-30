function solve() {
  const inputTextarea = document.querySelectorAll('textarea')[0];
  const outputTextarea = document.querySelectorAll('textarea')[1];
  const table = document.querySelector('tbody');

  document.querySelectorAll('button')[0].addEventListener('click', onClickGenerate);
  document.querySelectorAll('button')[1].addEventListener('click', onClickBuy);

  function onClickGenerate() {
    const products = JSON.parse(inputTextarea.value);

    for (product of products) {
      const newRow = document.createElement('tr');

      const imgCol = createCustomElement('td', 'img');
      imgCol.firstChild.setAttribute('src', product.img);

      const nameCol = createCustomElement('td', 'p');
      nameCol.firstChild.textContent = product.name;

      const priceCol = createCustomElement('td', 'p');
      priceCol.firstChild.textContent = product.price;

      const decFactorCol = createCustomElement('td', 'p');
      decFactorCol.firstChild.textContent = product.decFactor;

      const checkCol = createCustomElement('td', 'input');
      checkCol.firstChild.setAttribute('type', 'checkbox');

      newRow.appendChild(imgCol);
      newRow.appendChild(nameCol);
      newRow.appendChild(priceCol);
      newRow.appendChild(decFactorCol);
      newRow.appendChild(checkCol);

      table.appendChild(newRow);
    }
  }

  function onClickBuy() {
    const selectedCheck = Array.from(table.querySelectorAll('input[type="checkbox"]:checked'));
    const itemsBought = selectedCheck.map(i => i.parentElement.parentElement.children[1].firstChild.textContent);
    const totalPrice = selectedCheck.reduce((acc, cur) => { return acc += Number(cur.parentElement.parentElement.children[2].firstChild.textContent) }, 0);
    const decFactor = selectedCheck.reduce((acc, cur) => { return acc += Number(cur.parentElement.parentElement.children[3].firstChild.textContent) }, 0) / selectedCheck.length;
    
    
    outputTextarea.textContent = `Bought furniture: ${itemsBought.join(', ')}\n`;
    outputTextarea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextarea.textContent += `Average decoration factor: ${decFactor}`;


  }

  function createCustomElement(tagName, innerTagName) {
    const parent = document.createElement(tagName);
    const child = document.createElement(innerTagName);
    parent.appendChild(child);
    return parent;
  }
}