function print(data, step) {
    let result = [];
    for (let i = 0; i < data.length; i += step) {
        result.push(data[i]);
    }

    return result;
}

console.log(print(['5', '20', '31', '4', '20'], 2));