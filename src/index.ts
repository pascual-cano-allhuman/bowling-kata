export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	const framesPoints = getFramesPoints(frames);
	const extraPoints = getFramesExtraPoints(frames);
	return [...framesPoints, ...extraPoints].reduce((total, framePoints) => total + framePoints, 0);
};

const getFramesPoints = (frames: string[]): number[] => {
	return frames.map(frame => {
		const rolls = frame.split("-");
		if (rolls[0] === "X") return 10;
		if (rolls[1] === "/") return 10;
		const rollsPoints = rolls.map(roll => parseInt(roll));
		return rollsPoints.reduce((total, roll) => total + roll, 0);
	});
};

const getFramesExtraPoints = (frames: string[]): number[] => {
	return frames.map((frame, index) => {
		if (frame.endsWith("/")) return parseInt(frames[index + 1][0]);
		else return 0;
	});
};
