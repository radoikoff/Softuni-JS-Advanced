
function check(x1, y1, x2, y2) {
    let result = calcDistance(x1, y1, 0, 0);
    result += '\n' + calcDistance(x2, y2, 0, 0);
    result += '\n' + calcDistance(x1, y1, x2, y2);
    return result;

    
    function calcDistance(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    
        const result = Number.isInteger(distance) ? 'valid' : 'invalid';
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`
    }
}

//console.log(check(3, 0, 0, 4));
console.log(check(2, 1, 1, 1));