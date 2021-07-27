const objectDecider = require('./objectDecider');

test('objectDecider returns an object with properties name, plural , use & type', () => {
    const object = objectDecider("showAll")
    expect(object).toEqual(expect.objectContaining({
        name: expect.any(String),
        plural: expect.any(Boolean),
        use: expect.any(String),
        type: expect.any(String)
    }))
})

const testCases = [
    ["An Object", "held"],
    ["An Instrument", "played"],
    ["Clothing or Jewellery", "worn"],
    ["A Receptacle", "filled"]
]

describe('objectDecider returns correct type', () => {
    test.each(testCases)(
        "given $s returns correct $s",
        (type, expectedResult) => {
            const result = objectDecider(type);
            const objType = result.type;
            const action = result.use;
            expect(objType).toEqual(type);
            expect(action).toEqual(expectedResult);
        }
    )
})
