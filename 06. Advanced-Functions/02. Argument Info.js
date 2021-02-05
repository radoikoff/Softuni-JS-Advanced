function show(...args) {

    const tally = {};

    args.forEach((a) => {
        let argType = typeof (a);
        console.log(`${argType}: ${a}`);
        tally[argType] = tally[argType] ? tally[argType] + 1 : 1;
    });
    
    const entries = Object.entries(tally).sort((a,b)=>b[1] - a[1]);
    for(e of entries){
        console.log(`${e[0]} = ${e[1]}`)
    }

}


//show('cat', 42, function () { console.log('Hello world!'); })
show({ name: 'bob'}, 3.333, 9.999);