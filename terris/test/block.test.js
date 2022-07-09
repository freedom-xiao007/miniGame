const add = require("../script/block")
test("add 1+1", () => {
	expect(add(1, 1)).toBe(2);
});