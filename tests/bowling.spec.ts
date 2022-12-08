import { getBowlingScore } from "../src";

describe("Bowling game tests", () => {
	test(`Worst game scores 0 points`, () => {
		const game = "0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0";
		const score = getBowlingScore(game);
		expect(score).toBe(0);
	});

	test(`Game with just one pin down scores 1 point`, () => {
		const game = "1-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0";
		const score = getBowlingScore(game);
		expect(score).toBe(1);
	});

	test(`Game without spares and strikes is correctly managed`, () => {
		const game = "1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1";
		const score = getBowlingScore(game);
		expect(score).toBe(20);
	});

	test(`Game with a spare is correctly managed`, () => {
		const game = "1-/ 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0";
		const score = getBowlingScore(game);
		expect(score).toBe(10);
	});

	test(`Game with two spares without extra points is correctly managed`, () => {
		const game = "1-/ 0-0 0-/ 0-0 0-0 0-0 0-0 0-0 0-0 0-0";
		const score = getBowlingScore(game);
		expect(score).toBe(20);
	});
});
