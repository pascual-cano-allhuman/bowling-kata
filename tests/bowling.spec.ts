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

	test(`When you knock 9 pin per frame the score is 90`, () => {
		const score = getBowlingScore("9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0 9-0");
		expect(score).toBe(90);		
	});

	test(`When you get 1 spare and other rolls are missed the score is 10`, () => {
		const score = getBowlingScore("0-/ 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0");
		expect(score).toBe(10);
	});

	test(`When you get 1 strike and other rolls are missed the score is 10`, () => {
		const score = getBowlingScore("X 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0");
		expect(score).toBe(10);
	});

	test.skip(`When you get 1 spare and knock a one pin in next roll score is 12`, () => {
		const score = getBowlingScore("0-/ 1-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0 0-0");
		expect(score).toBe(12);
	});
});
