function addRemove(commands) {
    let acc = 1;
    let result = [];

    commands.forEach(c => {
        if (c == 'add') {
            result.push(acc);
        } else if (c == 'remove') {
            result.pop();
        }
        acc += 1;
    });

    if (result.length == 0) {
        return 'Empty';
    }

    return result.join('\n');
}

console.log(addRemove(['add', 'add', 'remove', 'add', 'add']))
console.log(addRemove(['remove', 'remove', 'remove']))