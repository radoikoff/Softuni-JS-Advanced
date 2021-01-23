function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;

  const temp = text.split(' ').map((w) => { return res = w.charAt(0).toUpperCase() + w.slice(1) }).join('');
  let result = 'Error!';

  if (convention == 'Camel Case') {
    result = temp.charAt(0).toLowerCase() + temp.slice(1);
  }

  if (convention == 'Pascal Case') {
    result = temp;
  }

  document.getElementById('result').textContent = result;
}