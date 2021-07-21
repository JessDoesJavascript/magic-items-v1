const magicItemsData = require('./realMagicItems.json');

const arrayLoop = (magicItemsData) => {
    let commonItems = magicItemsData.arrayOfItems.filter(item => item.desc[0].includes("common") === true)
    let newArray = commonItems.map(item => ({"name": item.name,
                                            "effect": item.desc[1]}));
    console.log(newArray.length, newArray);
}   

arrayLoop(magicItemsData)