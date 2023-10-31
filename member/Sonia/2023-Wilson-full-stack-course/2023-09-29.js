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
// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false

// 5. 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
function position(str){
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()){
            return str[i] + " " + i;  
        }
    }
    return -1;
}

// console.log(position("abcd"));  // prints -1
// console.log(position("AbcD"));  // prints A 0
// console.log(position("abCD"));  // prints C 2

// 6. 編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數。
function findSmallCount(arr, n){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < n) {
            count++;
        }
    }
    return count;
}


// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0

// 7. 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。
function findSmallerTotal(arr, n) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < n) {
            total += arr[i];
        }
    }
    return total;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0