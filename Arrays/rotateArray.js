function rotate(data, rotationCount) {
    for (i = 0; i < rotationCount; i++) {
        data.unshift(data.pop());
    }
    return data.join(' ');
}

console.log(rotate(['1', '2', '3', '4',], 2));