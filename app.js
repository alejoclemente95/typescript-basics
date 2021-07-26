"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btn = document.querySelector('button');
//Generics - An array is a type on its own that can store another type of objects, like string or int, therefore, we can define that like we do in Java
const numResults = [];
const textResults = [];
btn.addEventListener('click', () => {
    const numero1 = num1.value;
    const numero2 = num2.value;
    const result = addNumero(+numero1, +numero2);
    numResults.push(result);
    const strResult = addNumero('2', '7');
    textResults.push(strResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
//union type to allow multiple types on a parameter
function addNumero(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
//To have an object
const printResult = (resultObj) => {
    console.log(resultObj.val);
};
//Promises are also considered a generic type, because a Promise wraps the result of it when it is resolved
//We can specify the return type of the promise so typeScript can infer it.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hi there from a promise');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.italics());
});
