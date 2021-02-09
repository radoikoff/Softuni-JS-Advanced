class List {
    constructor() {
        this._arr = [];
        this.size = 0;
    }

    add(element) {
        this._arr.push(element);
        this._arr.sort((a, b) => a - b);
        this.size = this._arr.length;
        return new List();
    }

    remove(index) {
        if (index < 0 || index > this._arr.length) {
            throw new RangeError('index out of bound')
        }

        this._arr.splice(index, 1);
        this.size = this._arr.length;
        return new List();
    }

    get(index) {
        if (index < 0 || index > this._arr.length) {
            throw new RangeError('index out of bound')
        }

        return this._arr[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
