// 1. 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。
function printEvery3() {
    for (let i = 1; i <= 88; i+=3){
        console.log(i)
    }
}
// printEvery3()

// 2. 編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
function table9to9() {
    for (let x = 1; x <= 9; x++){
        for (let y = 1; y <=9; y++){
            let result = x * y;
            console.log(`${x} x ${y} = ${result}`);
        }
    }
}
// table9to9()

// 3. 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
function isUpperCase(str){
    if (str.length == 0) {
        return false;
    }
    return str[0] == str[0].toUpperCase();    
}
// console.log(isUpperCase("ABCD")); // returns true
// console.log(isUpperCase("")); // returns false
// console.log(isUpperCase("aBCD")); // returns false


// 4. 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
function isAllUpperCase(str){
    if (str.length == 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++){
        if (str[i] !== str[i].toUpperCase()) {
            return false;
        }
    }
    return true;
    // return str == str.toUpperCase();    
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false