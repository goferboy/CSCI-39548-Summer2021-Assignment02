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
let mapArray = myTestArray.map(element => element.toUpperCase());
console.log(mapArray);

//clear mapArray for a clean test of myMap()
mapArray = [];
console.log("Testing myMap()");
mapArray = myTestArray.myMap(element => element.toUpperCase());
console.log(mapArray);

console.log('\n');

//My custom implementation of Array.prototype.filter() 
Array.prototype.myFilter = () => {

}

//My custom implementation of Array.prototype.some() 
Array.prototype.mySome = () => {

}

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
