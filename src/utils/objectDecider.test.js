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