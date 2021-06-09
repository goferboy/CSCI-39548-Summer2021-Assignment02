//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Date: June 14 2021
//Assignment #2: JavaScript

// Test Array For Array functions
const myTestArray = ['a', 'b', 'c'];
console.log("Initial test array:", myTestArray);

// Test Object for Object functions
const myTestObject = {
    a: "Henry",
    b: 41,
    c: true
};
console.log("Initial test object:", myTestObject);

console.log();

/*
************************************************************
***  Custom implementation of Array.prototype.forEach()  ***
************************************************************
*/

Array.prototype.myEach = function (callBack) {
    for (let element of this)
        callBack(element);
}

// Test comparison between forEach() and myEach()
console.log("Testing forEach()");
myTestArray.forEach(element => console.log(element));

console.log("Testing myEach()");
myTestArray.myEach(element => console.log(element));

console.log();

/*
************************************************************
***    Custom implementation of Array.prototype.map()    ***
************************************************************
*/

Array.prototype.myMap = function (callBack) {
    let returnArray = [];
    for (let i = 0; i < this.length; i++)
        returnArray[i] = callBack(this[i]);
    return returnArray;
}

// Test comparison between map() and myMap()
console.log("Testing map()");
console.log(myTestArray.map(element => element.toUpperCase()));

console.log("Testing myMap()");
console.log(myTestArray.myMap(element => element.toUpperCase()));

console.log();

/*
************************************************************
***  Custom implementation of Array.prototype.filter()   ***
************************************************************
*/

Array.prototype.myFilter = function (callBack) {
    let returnArray = [];
    let insertCounter = 0;
    for (let element of this) {
        if (callBack(element))
            returnArray[insertCounter++] = element;
    }
    return returnArray;
}

// Test comparison between filter() and myFilter()
console.log("Testing filter()");
console.log(myTestArray.filter(element => element === 'b'));

console.log("Testing myFilter()");
console.log(myTestArray.myFilter(element => element === 'b'));

console.log();

/*
************************************************************
***   Custom implementation of Array.prototype.some()    ***
************************************************************
*/

Array.prototype.mySome = function(callBack) {
    for (let element of this) {
        if (callBack(element))
            return true;
    }
    return false;
}

// Test comparison between some() and mySome()
console.log("Testing some()");
console.log("Is there a 'b' in myTestArray:", myTestArray.some(element => element === 'b'));
console.log("Is there a 'd' in myTestArray:", myTestArray.some(element => element === 'd'));

console.log("Testing mySome()");
console.log("Is there a 'b' in myTestArray:", myTestArray.mySome(element => element === 'b'));
console.log("Is there a 'd' in myTestArray:", myTestArray.mySome(element => element === 'd'));

console.log();


/*
************************************************************
***   Custom implementation of Array.prototype.every()   ***
************************************************************
*/

Array.prototype.myEvery = function(callBack) {
    for (let element of this) {
        if (!callBack(element))
            return false;
    }
    return true;
}

// Test comparison between every() and myEvery()
// char Values: a = 97, b = 98, c = 99
console.log("Testing every()");
console.log("Every element has a charCodeAt() value greater than 96:",myTestArray.every(element => element.charCodeAt(0) > 96));
console.log("Every element has a charCodeAt() value less than 98:",myTestArray.every(element => element.charCodeAt(0) < 98));

console.log("Testing myEvery()");
console.log("Every element has a charCodeAt() value greater than 96:",myTestArray.myEvery(element => element.charCodeAt(0) > 96));
console.log("Every element has a charCodeAt() value less than 98:",myTestArray.myEvery(element => element.charCodeAt(0) < 98));

console.log();

/*
************************************************************
***  Custom implementation of Array.prototype.reduce()   ***
************************************************************
*/

//Can work if user provides an initial value argument or not
Array.prototype.myReduce = function(callBack, initValue) {
    let reducedValue;
    for (let i = 0; i < this.length; i++) {
        if (i === 0) {
            
            //If not initial value is defined, the first
            //element is the initial value
            if (typeof initValue == 'undefined')
                reducedValue = this[0];
            
            //Else, user provided initial value is assigned
            //and accumulation callback is called for the
            //first element
            else {
                reducedValue = initValue;
                reducedValue = callBack(reducedValue, this[0]);
            }
        }
        //iterate through rest of array after first value is
        //determined.
        else {
            reducedValue = callBack(reducedValue, this[i]);
        }
    }
    return reducedValue;
}

// Test comparison between reduce() and myReduce()
// Both test with and without an optional argument of an
// initial value
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

/*
************************************************************
***  Custom implementation of Array.prototype.includes() ***
************************************************************
*/

Array.prototype.myIncludes = function(queryItem) {
    for (let element of this) {
        if (element === queryItem)
            return true;
    }
    return false;
}

// Test comparison between includes() and myIncludes()
console.log("Testing includes()");
console.log("myTestArray includes an 'a':", myTestArray.includes('a'));
console.log("myTestArray includes an 'aa':", myTestArray.includes('aa'));

console.log("Testing myIncludes()");
console.log("myTestArray includes an 'a':", myTestArray.myIncludes('a'));
console.log("myTestArray includes an 'aa':", myTestArray.myIncludes('aa'));

console.log();

/*
************************************************************
***  Custom implementation of Array.prototype.indexOf()  ***
************************************************************
*/

Array.prototype.myIndexOf = function(queryItem) {
    for (let i = 0; i < this.length; i++) {
        if (queryItem === this[i])
            return i;
    }
    return -1;
}

// Test comparison between indexOf() and myIndexOf()
console.log("Testing indexOf()");
console.log("myTestArray's index of 'a':", myTestArray.indexOf('a'));
console.log("myTestArray's index of 'aa':", myTestArray.indexOf('aa'));

console.log("Testing myIncludes()");
console.log("myTestArray's index of 'a':", myTestArray.myIndexOf('a'));
console.log("myTestArray's index of 'aa':", myTestArray.myIndexOf('aa'));

console.log();

/*
************************************************************
***    Custom implementation of Array.prototype.push()   ***
************************************************************
*/

Array.prototype.myPush = function(newElement) {
    this[this.length] = newElement;
    return this.length;
}

// Test comparison between push() and myPush()
// Copied array used to show sucessfull pushed element
let pushArray = [...myTestArray];

console.log("Testing push()");
console.log("# of Elements:", pushArray.length);
console.log(pushArray);
console.log("# of Elements:", pushArray.push('a'));
console.log(pushArray);

console.log("Testing myPush()");
pushArray = [...myTestArray];
console.log("# of Elements:", pushArray.length);
console.log(pushArray);
console.log("# of Elements:", pushArray.myPush('a'));
console.log(pushArray);

console.log();

/*
************************************************************
***Custom implementation of Array.prototype.lastIndexOf()***
************************************************************
*/

Array.prototype.myLastIndexOf = function(queryItem) {
    let found = -1;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === queryItem)
            found = i;
    }
    return found;
}

// Test comparison between lastIndexOf() and myLastIndexOf()
// Using push array to demonstrate difference in return index
console.log("Testing lastIndexOf()");
console.log("myTestArray for 'a':", myTestArray.lastIndexOf('a'));
console.log("outputArray for 'a':", pushArray.lastIndexOf('a'));

console.log("Testing myLastIndexOf()");
console.log("myTestArray for 'a':", myTestArray.myLastIndexOf('a'));
console.log("outputArray for 'a':", pushArray.myLastIndexOf('a'));

console.log();

/*
************************************************************
***        Custom implementation of Object.keys()        ***
************************************************************
*/

Object.grabKeys = function(object) {
    let returnArray = [];
    let counter = 0;
    for (let keys in object)
        returnArray[counter++] = keys;
    return returnArray;
}

// Test comparison between keys() and grabKeys()
console.log("Testing Object.keys")
console.log(Object.keys(myTestObject));

console.log("Testing Object.grabKeys")
console.log(Object.grabKeys(myTestObject));

console.log();

/*
************************************************************
***       Custom implementation of Object.values()       ***
************************************************************
*/

Object.grabValues = function(object) {
    let returnArray = [];
    let counter = 0;
    for (let keys in object)
        returnArray[counter++] = object[keys];
    return returnArray;
}

// Test comparison between values() and grabValues()
console.log("Testing Object.values");
console.log(Object.values(myTestObject));

console.log("Testing Object.grabValues");
console.log(Object.grabValues(myTestObject));
