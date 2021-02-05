function create(words) {

   const main = document.getElementById('content');

   words.forEach(word => {
      const p = document.createElement('p');
      p.textContent = word;
      p.style = 'display:none';

      const div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', onClick);
      main.appendChild(div);

   });

   function onClick(ev) {
      
      const p = ev.target.querySelector('p');
      if(p){
         p.style = '';
      }
   }
}