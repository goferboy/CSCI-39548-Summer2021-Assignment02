//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Assignment #2: JavaScript

const myTestArray = ['a', 'b', 'c'];

//My custom implementation of Array.prototype.forEach() 
Array.prototype.myEach = function (callBack) {
    for (let element of this)
        callBack(element);
}

console.log("Testing forEach()");
myTestArray.forEach(element => console.log(element));

console.log("Testing myEach()");
myTestArray.myEach(element => console.log(element));

console.log();

//My custom implementation of Array.prototype.map() 
Array.prototype.myMap = function (callBack) {
    let returnArray = [];
    for (let i = 0; i < this.length; i++)
        returnArray[i] = callBack(this[i]);
    return returnArray;
}

console.log("Testing map()");
let outputArray = myTestArray.map(element => element.toUpperCase());
console.log(outputArray);

//clear outputArray for a clean test of myMap()
outputArray = [];
console.log("Testing myMap()");
outputArray = myTestArray.myMap(element => element.toUpperCase());
console.log(outputArray);

console.log();

//My custom implementation of Array.prototype.filter() 
Array.prototype.myFilter = function (callBack) {
    let returnArray = [];
    let insertCounter = 0;
    for (let element of this) {
        if (callBack(element))
            returnArray[insertCounter++] = element;
    }
    return returnArray;
}

outputArray = [];
console.log("Testing filter()");
outputArray = myTestArray.filter(element => element === 'b');
console.log(outputArray);

outputArray = [];
console.log("Testing myFilter()");
outputArray = myTestArray.myFilter(element => element === 'b');
console.log(outputArray);

console.log();

//My custom implementation of Array.prototype.some() 
Array.prototype.mySome = function(callBack) {
    for (let element of this) {
        if (callBack(element))
            return true;
    }
    return false;
}

console.log("Testing some()");
console.log("Is there a 'b' in myTestArray: ", myTestArray.some(element => element === 'b'));
console.log("Is there a 'd' in myTestArray: ", myTestArray.some(element => element === 'd'));

console.log("Testing mySome()");
console.log("Is there a 'b' in myTestArray: ", myTestArray.mySome(element => element === 'b'));
console.log("Is there a 'd' in myTestArray: ", myTestArray.mySome(element => element === 'd'));

console.log();

//My custom implementation of Array.prototype.every() 
Array.prototype.myEvery = function(callBack) {
    for (let element of this) {
        if (!callBack(element))
            return false;
    }
    return true;
}

console.log("Testing every()");
console.log("Does every element have a charCodeAt() value greater than 96: ",myTestArray.every(element => element.charCodeAt(0) > 96));
console.log("Does every element have a charCodeAt() value greater than 97: ",myTestArray.every(element => element.charCodeAt(0) > 97));

console.log("Testing myEvery()");
console.log("Does every element have a charCodeAt() value greater than 96: ",myTestArray.myEvery(element => element.charCodeAt(0) > 96));
console.log("Does every element have a charCodeAt() value greater than 97: ",myTestArray.myEvery(element => element.charCodeAt(0) > 97));

console.log();


//My custom implementation of Array.prototype.reduce() 
Array.prototype.myReduce = function(callBack, initValue) {
    let reducedValue;
    for (let i = 0; i < this.length; i++) {
        if (i === 0) {
            if (typeof initValue == 'undefined')
                reducedValue = this[0];
            else {
                reducedValue = initValue;
                reducedValue = callBack(reducedValue, this[0]);
            }
        }
        else {
            reducedValue = callBack(reducedValue, this[i]);
        }
    }
    return reducedValue;
}

console.log("Testing reduce()");
console.log(myTestArray.reduce((accumulator, currentValue) => {
    return accumulator + ('/' + currentValue);
}));
console.log(myTestArray.reduce((accumulator, currentValue) => {
    return accumulator + ('/' + currentValue);
}, '3'));

console.log("Testing myReduce()");
console.log(myTestArray.myReduce((accumulator, currentValue) => {
    return accumulator + ('/' + currentValue);
}));
console.log(myTestArray.myReduce((accumulator, currentValue) => {
    return accumulator + ('/' + currentValue);
}, '3'));

console.log();

//My custom implementation of Array.prototype.includes() 
Array.prototype.myIncludes = function(queryItem) {
    for (let element of this) {
        if (element === queryItem)
            return true;
    }
    return false;
}

console.log("Testing includes()");
console.log(myTestArray.includes('a'));
console.log(myTestArray.includes('aa'));
console.log("Testing myIncludes()");
console.log(myTestArray.myIncludes('a'));
console.log(myTestArray.myIncludes('aa'));

//My custom implementation of Array.prototype.indexOf() 
Array.prototype.myIndexOf = () => {

}

//My custom implementation of Array.prototype.push() 
Array.prototype.myPush = () => {

}

//My custom implementation of Array.prototype.lastIndexOf() 
Array.prototype.myLastIndexOf = () => {

}

//My custom implementation of Object.keys() 
Object.grabKeys = () => {

}

//My custom implementation of Object.values() 
Object.grabValues = () => {

}
