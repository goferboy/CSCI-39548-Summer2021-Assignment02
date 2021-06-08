//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Assignment #2: JavaScript

let myTestArray = ['a', 'b', 'c'];

//My custom implementation of Array.prototype.forEach() 
Array.prototype.myEach = (callBack) => {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
}

myTestArray.forEach(element => console.log(element));
myTestArray.myEach(element => console.log(element));

//My custom implementation of Array.prototype.map() 
Array.prototype.myMap = () => {

}

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
