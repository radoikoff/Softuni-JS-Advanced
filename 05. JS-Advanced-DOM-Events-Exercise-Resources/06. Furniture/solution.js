function solve() {
  const inputTextarea = document.querySelectorAll('textarea')[0];
  const outputTextarea = document.querySelectorAll('textarea')[1];

  document.querySelectorAll('button')[0].addEventListener('click', onClickGenerate);
  document.querySelectorAll('button')[1].addEventListener('click', onClickBuy);

  function onClickGenerate() {
    const products = JSON.parse(inputTextarea.value);

    for (product of products) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      //const x = createElement('input', '', { name: 'type', value: 'checkbox' });
      const x = createElement('p', 'test');

      console.log(x)
    }
    //new row

    //new tds

    //attach 
    
    //
  }

  function onClickBuy() {
    console.log('kk')
  }

  function createElement(tagName, textContent, attr) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    element.setAttribute(attr.name, attr.value);
    return element;
  }
}