import { getBowlingScore } from "../src";

describe("Bowling game tests", () => {
	test(`Worst game ever should score 0`, () => {
		const score = getBowlingScore("0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0");
		expect(score).toBe(0);
	});

	test(`When you knock 1 pin per frame the score is 10`, () => {
		const score = getBowlingScore("1-0 1-0 1-0 1-0 1-0 1-0 1-0 1-0 1-0 1-0");
		expect(score).toBe(10);
	});
});
