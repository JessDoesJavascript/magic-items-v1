const descriptionWriter = require('./descriptionWriter')
// descriptionWriter function is called with the following parameters:
// objectName, objectUse, objectPlural, itemStrength

test('descriptionWriter returns object with correct properties', () => {
    const descriptionWritten = descriptionWriter("bracers", "worn", true, "")
    expect(descriptionWritten).toEqual(expect.objectContaining({
        determiner: expect.any(String),
        adjective: expect.any(String),
        objectName: expect.any(String),
        grantOrGrants: expect.any(String),
        effect: expect.any(String),
        skillType: expect.any(String),
        check: expect.any(String),
        objectUse: expect.any(String),
        item: expect.any(String),
        description: expect.any(String),
        presentParticipleWord: expect.any(String),
        objectPlural: expect.any(Boolean)
    }))
})

test('descriptionWriter returns correct grammar when object is plural', () => {
    const grantOrGrants = descriptionWriter("bracers", "worn", true, "").grantOrGrants
    expect(grantOrGrants).toMatch("grant")
})

test('descriptionWriter returns correct grammar when object is not plural', () => {
    const grantOrGrants = descriptionWriter("bracers", "worn", false, "").grantOrGrants
    expect(grantOrGrants).toMatch("grants")
})

test('descriptionWriter returns correct determiner option', () => {
    const description = descriptionWriter("waistcoat", "worn", false, "")
    const determiner = description.determiner;
    const adjective = description.adjective;
    const plural = description.objectPlural;
    if (plural) {
        expect(determiner).toMatch("A set of")
    } else
        if (adjective.charAt(0) === "a" ||
            adjective.charAt(0) === "e" ||
            adjective.charAt(0) === "i" ||
            adjective.charAt(0) === "o" ||
            adjective.charAt(0) === "u") {
            expect(determiner).toMatch("An")
        } else {
            expect(determiner).toMatch("A")
        }
})

test('descriptionWriter filters by itemStrength correctly', () => {
    const description = descriptionWriter("waistcoat", "worn", false, "rare")
    const itemStrength = description.effect;
    expect(itemStrength).toMatch("a +2 bonus")
})

const testCases = [
    ["waistcoat", "worn", false, "common", "advantage"],
    ["waistcoat", "worn", false, "uncommon", "a +1 bonus"],
    ["waistcoat", "worn", false, "rare", "a +2 bonus"],
    ["waistcoat", "worn", false, "veryRare", "a +3 bonus"],
    ["waistcoat", "worn", false, "legendary", "a +4 bonus"],
]

describe('itemStrength filter works correctly', () => {
    test.each(testCases)(
        "given $s $s $s $s, returns $s",
        (first, second, third, fourth, expectedResult) => {
            const result = descriptionWriter(first, second, third, fourth).effect
            expect(result).toEqual(expectedResult)
        }
    )
})