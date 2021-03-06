function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');
    document.getElementById('add').addEventListener('click', addTask);

    const openDiv = document.querySelector('h1.orange').parentNode.parentNode.lastElementChild;
    const inProgressDiv = document.querySelector('h1.yellow').parentNode.parentNode.lastElementChild;
    const completeDiv = document.querySelector('h1.green').parentNode.parentNode.lastElementChild;


    function addTask(ev) {
        ev.preventDefault();

        if (!task.value || !description.value || !dueDate.value) {
            return;
        }

        const article = e('article');
        const h3 = e('h3', task.value);
        const desc = e('p', `Description: ${description.value}`);
        const due = e('p', `Due Date: ${dueDate.value}`);
        const innerDiv = e('div', undefined, 'flex');
        const startBtn = e('button', 'Start', 'green');
        const delBtn = e('button', 'Delete', 'red');
        startBtn.addEventListener('click', () => onStart(article, startBtn));
        delBtn.addEventListener('click', () => article.remove());
        innerDiv.appendChild(startBtn);
        innerDiv.appendChild(delBtn);
        article.appendChild(h3);
        article.appendChild(desc);
        article.appendChild(due);
        article.appendChild(innerDiv);

        openDiv.appendChild(article);

    }

    function onStart(article, startBtn) {
        inProgressDiv.appendChild(article);
        const finishBtn = e('button', 'Finish', 'orange');
        finishBtn.addEventListener('click', () => onFinish(article))
        startBtn.parentNode.appendChild(finishBtn);
        startBtn.remove();
    }

    function onFinish(article) {
        completeDiv.appendChild(article);
        article.lastElementChild.remove();
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