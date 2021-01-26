function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const searchValue = searchField.value.toLowerCase();
      searchField.value = '';

      for (let tr of document.querySelectorAll('tbody tr')) {
         tr.classList.remove('select');
      }

      const cells = document.querySelectorAll('tbody tr td');

      for (let element of cells) {
         if (element.textContent.toLowerCase().indexOf(searchValue) != -1) {
            element.parentElement.classList.add('select');
         }
      }
   }
} 