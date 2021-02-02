function add(number){
    let acc = number;
    //acc+=number;

    
    const addFunc = function addAgain(num){
        acc+=num;
        return addFunc;
    };
    
    addFunc.toString = () => acc;
    return addFunc;
}




console.log(add(1)(3)(-3).toString());