function solve() {
    const [lecture, date] = document.querySelectorAll('form input');
    const modules = document.querySelector('select');
    const resultDiv = document.querySelector('div.modules');
    document.querySelector('form button').addEventListener('click', addLecture);

    const state = {};

    function addLecture(ev) {
        ev.preventDefault();
        const lectureName = lecture.value;
        const lectureDate = date.value;
        const module = modules.value;

        if (!lectureName || !lectureDate || module == 'Select module') {
            return;
        }

        if (state.hasOwnProperty(module) == false) {
            const newModule = e('div', undefined, 'module');
            const h3 = e('h3', module.toUpperCase() + '-MODULE');
            const ul = e('ul');
            newModule.appendChild(h3);
            newModule.appendChild(ul);

            resultDiv.appendChild(newModule);

            state[module] = { ul: ul, lis: [] };
        }


        //lecture
        const li = e('li', undefined, 'flex');
        const formattedDate = lectureDate.split('-').join('/').split('T').join(' - ');
        const h4 = e('h4', `${lectureName} - ${formattedDate}`);
        const delBtn = e('button', 'Del', 'red');
        delBtn.addEventListener('click', () => delLecture(li));
        li.appendChild(h4);
        li.appendChild(delBtn);

        //state[module].ul.appendChild(li);

        state[module].lis.push({ li, formattedDate });


        //sort and attach
        state[module].lis.sort((a, b) => a.formattedDate.localeCompare(b.formattedDate))
            .forEach(element => state[module].ul.appendChild(element.li));

    };

    function delLecture(li) {

        //TODO: remove items from the state
        if (li.parentNode.children.length == 1) {
            li.parentNode.parentNode.remove();
        }
        li.remove();
    }




    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }

};