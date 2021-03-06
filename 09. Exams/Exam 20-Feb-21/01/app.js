function solve() {
   const resultSection = document.querySelector('main section');
   const archiveSection = document.querySelector('section.archive-section ol');
   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   document.querySelector('form button.btn').addEventListener('click', onCreate);


   function onCreate(ev) {
      ev.preventDefault();

      console.log(content.value)

      const article = e('article');
      const h1 = e('h1', title.value);

      const categoryP = e('p', 'Category: ');
      const catStrong = e('strong', category.value);
      categoryP.appendChild(catStrong);

      const creatorP = e('p', 'Creator: ');
      const creatorStrong = e('strong', creator.value);
      creatorP.appendChild(creatorStrong);

      const contentP = e('p', content.value);

      const btnDiv = e('div', undefined, 'buttons');
      const delBtn = e('button', 'Delete', 'btn delete');
      delBtn.addEventListener('click', () => article.remove());
      const archiveBtn = e('button', 'Archive', 'btn archive');
      archiveBtn.addEventListener('click', () => onArchive(article, h1));
      btnDiv.appendChild(delBtn);
      btnDiv.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(btnDiv);

      resultSection.appendChild(article);
   }


   function onArchive(article, h1) {
      const li = e('li', h1.textContent);
      archiveSection.appendChild(li);

      Array.from(archiveSection.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(arch => archiveSection.appendChild(arch));

      article.remove();
   }

   function e(type, content, className) {
      const result = document.createElement(type);

      if (content) {
         result.textContent = content;
      }

      if (className) {
         result.className = className;
      }
      return result;
   }

}
