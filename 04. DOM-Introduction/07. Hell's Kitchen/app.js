function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const data = JSON.parse(document.querySelector('div[id=inputs] textarea').value);
      const objs = data.map((rest) => {

         let restData = rest.split(' - ');
         const obj = {
            restaurant: restData[0].trim(),
         }

         for (person of restData[1].split(', ')) {
            const kvp = person.split(' ');
            obj[kvp[0]] = Number(kvp[1]);
         }
         return obj;
      });
      console.log(objs)
   }
}