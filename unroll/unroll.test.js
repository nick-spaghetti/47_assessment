const unroll = require("./unroll");

describe("#unroll", () => {
	it("is a function", () => {
		expect(typeof unroll).toBe("function");
	});

	it("should combine arrays", () => {
		const square = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16],
		];

		const smallerSquare = [
			["a", "b", "c"],
			["d", "e", "f"],
			["g", "h", "i"],
		];

		expect(unroll(square)).toEqual([
			1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
		]);
		expect(unroll(smallerSquare)).toEqual([
			"a",
			"b",
			"c",
			"f",
			"i",
			"h",
			"g",
			"d",
			"e",
		]);
	});
});
