function cook(source, op1, op2, op3, op4, op5) {

    let number = Number.parseInt(source);
    let operation = '';
    let result = '';

    for (let i = 1; i < 6; i++) {
        operation = arguments[i]
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= 0.2 * number;
                break;
            default:
                break;
        }
        result += '\n' + number;

    }

    return result;
}

console.log(cook('32', 'chop', 'chop', 'chop', 'chop', 'chop'));

