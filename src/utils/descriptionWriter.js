const adjectives = require('../data/adjectives.json');
const richDescriptions = require('../data/richDescriptions.json');
const effectType = require('../data/effectType.json');
const randomNumber = require('./randomNumberGen');

function descriptionWriter(objectName, objectUse, objectPlural, itemStrength) {
    const adjective = adjectives.adjectives[randomNumber(adjectives.adjectives.length)]
    const presentParticiple = richDescriptions.descriptions[randomNumber(richDescriptions.descriptions.length)]
    const determinerDecider = () => {
        if (objectPlural) {
            return "A set of"
        } else {
            let firstChar = adjective.charAt(0);
            if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
                return "An"
            } else {
                return "A"
            }
        }
    }
    const grantOrGrantsDecider = () => {
        if (objectPlural) {
            return "grant"
        } else {
            return "grants"
        }
    }
    const effectFinder = (itemStrength) => {
        if (itemStrength === "" || itemStrength === "showAll") {
            let effect = effectType.effectTypes[randomNumber(effectType.effectTypes.length)]
            return effect.effect
        } else {
            let effect = effectType.effectTypes.filter(effect => effect.type === itemStrength);
            return effect[0].effect
        }
    }
    const skillFinder = () => {
        if (presentParticiple.skill === "") {
            return "a single dice roll"
        } else {
            return presentParticiple.skill
        }
    }
    const checkDecider = () => {
        if (presentParticiple.type === "save") {
            return "saves"
        } else if (presentParticiple.type === "skillCheck") {
            return "checks"
        } else {
            return ""
        }
    }
    const determiner = determinerDecider();
    const grantOrGrants = grantOrGrantsDecider();
    const skillType = skillFinder();
    const effect = effectFinder(itemStrength);
    const check = checkDecider();
    const presentParticipleWord = presentParticiple.word;
    const magicItem = "the " + objectName + " of " + presentParticipleWord;
    const words = {
        determiner, adjective, objectName, grantOrGrants, effect, skillType, check, objectUse, presentParticipleWord, objectPlural,
        item: magicItem,
        description: determiner + " " + adjective + " "
            + objectName + " that " + grantOrGrants
            + " " + effect + " to " + skillType
            + " " + check + " when " + objectUse + "."
    }
    return words
}

module.exports = descriptionWriter;