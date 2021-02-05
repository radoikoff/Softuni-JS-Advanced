function sameNumber(number) {
    const numberAsString = number.toString();

    let isEqual = true;
    let sum = 0;
    for (let index = 0; index < numberAsString.length; index++) {
        if (numberAsString[index] != numberAsString[index + 1] && numberAsString[index + 1] != undefined) {
            isEqual = false;
        }

        sum += Number(numberAsString[index]);
    }
    return `${isEqual}\n${sum}`;

}

console.log(sameNumber(2222222));