function search() {

   const searchValue = document.getElementById('searchText').value;
   const elements = document.querySelectorAll('ul li');
   let matchCount = 0;

   for (let element of elements) {
      if (element.textContent.indexOf(searchValue) != -1) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matchCount++;
      }
   }

   document.getElementById('result').textContent = `${matchCount} matches found`
}
