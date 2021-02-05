function createSortedList() {

    function add(element) {
        this.arr.push(element);
        this.sort(this.arr);
        this.size++;
    };

    function sort(array) {
        return array.sort((a, b) => a - b);
    }

    const sortedList = {
        arr: [],
        sort,
        add,
        remove(index) {
            if (index < 0 || index > this.size) {
                return;
            }

            if(index == 0 && this.size == 0){
                return;
            }

            this.arr.splice(index, 1);
            this.sort(this.arr);
            this.size--;
        },
        get(index) {
            if (index < 0 || index > this.size) {
                return;
            }
            return this.arr[index];
        },
        size: 0
    };

    return sortedList;
};

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(0));
list.remove(1);
//console.log(list.get(1));
console.log(list);
