const sum = require("./sum");

it('sum(1m2) should equals',() => {
    sum(1,2)
    expect(sum(1,2)).toEqual(3);
} )