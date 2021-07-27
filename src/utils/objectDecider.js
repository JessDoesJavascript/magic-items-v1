const objects = require('../data/richObjects.json');
const randomNumber = require('./randomNumberGen');

let arrayOfObjects = objects.objectsByName;

function objectDecider(type) {
    if (type === "" || type === "showAll") {
       let object = arrayOfObjects[randomNumber(arrayOfObjects.length)]
       return object;
    } else {
        let filteredObjects = arrayOfObjects.filter(object => object.type === type)
        let filteredObjectsLength = filteredObjects.length;
        let object = filteredObjects[randomNumber(filteredObjectsLength)]
        return object
    }
}
module.exports = objectDecider;