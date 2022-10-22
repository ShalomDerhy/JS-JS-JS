// 0

function name(x) {

}

let x = true;
const name = () => {
    let y;
}

let myArr = [
    [1, 2, [10, 20, 30],
        [15, 20]
    ]
]

// 1

const shay = (str1, str2) => {
    console.log("heyya, world");
    console.log(str1);
    console.log(str2);
}

shay("hila", "shay");


const myArrF = (myArr) => {
    for (let i = 0; i < myArr.length / 2; i++) {
        let num1 = myArr[i];
        let num2 = myArr[myArr.length - 1 - i];
        if (num1 != num2) {
            return false;
        }
    }
    return true;
}

// 2

let ans = myArrF([1, 2, 3, 4]);

const nextInLine = (arr, item) => {

    arr.push(item);
    return arr.shift();

}

// creating a new variable
var testArr = [1, 2, 3, 4, 5];

console.log("before: " + JSON.stringify(testArr));

// the function that adds the item
console.log(nextInLine(testArr, 6));

console.log("After: " + JSON.stringify(testArr));


// checking Hila question

const arrF = (myArr) => {
    for (let i = 0; i < myArr.length - 1; i++) {
        if (myArr[i] > myArr[i = i + 1]) {

            return "The Numbers are align!"
        } else {
            return "The Numbers are not align..."
        }
    }
}

console.log(myArr = [1, 2, 3, 4, 5, 6]);