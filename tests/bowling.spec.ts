import { getBowlingScore } from "../src";

describe("Bowling game tests", () => {
	test(`Worst game ever should score 0`, () => {
		const score = getBowlingScore("0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0");
		expect(score).toBe(0);
	});
});
