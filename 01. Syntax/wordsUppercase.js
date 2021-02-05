function makeUpper(text){
    const regex = /\s*\W\s*/
    let result = text.split(regex);
    result = result.filter(i => i != '').map(i => i.toUpperCase());

    return result.join(', ');
}

console.log(makeUpper('Hi, how are you?'));