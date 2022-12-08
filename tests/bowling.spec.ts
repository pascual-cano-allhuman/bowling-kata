import { getBowlingScore } from "../src";

describe("Bowling game tests", () => {
	test(`Worst game scores 0 points`, () => {
		const game = "0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0";
		const score = getBowlingScore(game);
		expect(score).toBe(0);
	});
});
