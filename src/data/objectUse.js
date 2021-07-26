const richObjects = require('./richObjects.json')

function objectUse() {
let arrayOfUses = [];
let arrayOfObjects = richObjects.objectsByName;
for (let i = 0; i < arrayOfObjects.length; i++) {
    arrayOfUses.push(arrayOfObjects[i].type)
}
let uniqueTypes = [...new Set(arrayOfUses)]

return uniqueTypes
}

module.exports = objectUse;