//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Date: June 14 2021
//Assignment #2: JavaScript Methods

/*
************************************************************
***  Custom implementation of Array.prototype.forEach()  ***
************************************************************
*/

Array.prototype.myEach = function(callBack) {
    for (let element of this)
        callBack(element);
}

/*
************************************************************
***    Custom implementation of Array.prototype.map()    ***
************************************************************
*/

Array.prototype.myMap = function(callBack) {
    let returnArray = [];
    for (let i = 0; i < this.length; i++)
        returnArray[i] = callBack(this[i]);
    return returnArray;
}

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
            
            //If initial value is not defined, the first
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

/*
************************************************************
***    Custom implementation of Array.prototype.push()   ***
************************************************************
*/

// Can accept multiple arguments
Array.prototype.myPush = function(...newElements) {
    for (newElement of newElements)
        //Note: this.length increments after each interation
        //since a new element is inserted. Therefore, 
        //this.length will always point to the next empty
        //element after the last filled one.
        this[this.length] = newElement;
    return this.length;
}

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
