//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Assignment #2: JavaScript

const myTestArray = ['a', 'b', 'c'];

//My custom implementation of Array.prototype.forEach() 
Array.prototype.myEach = function (callBack) {
    for (let i = 0; i < this.length; i++)
        callBack(this[i]);
}

console.log("Testing forEach()");
myTestArray.forEach(element => console.log(element));

console.log("Testing myEach()");
myTestArray.myEach(element => console.log(element));

console.log('\n');

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

console.log('\n');

//My custom implementation of Array.prototype.filter() 
Array.prototype.myFilter = function (callBack) {
    let returnArray = [];
    let insertCounter = 0;
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i]))
            returnArray[insertCounter++] = this[i];
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

console.log('\n');

//My custom implementation of Array.prototype.some() 
Array.prototype.mySome = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i]))
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

console.log('\n');

//My custom implementation of Array.prototype.every() 
Array.prototype.myEvery = () => {

}

//My custom implementation of Array.prototype.reduce() 
Array.prototype.myReduce = () => {

}

//My custom implementation of Array.prototype.includes() 
Array.prototype.myIncludes = () => {

}

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
