export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	const framesPoints = frames.map(getFramePoints);
	return framesPoints.reduce((total, framePoints) => total + framePoints, 0);
};

const getFramePoints = (frame: string): number => {
	const rolls = frame.split("-");
	if (rolls[0] === "X") return 10;
	if (rolls[1] === "/") return 10;
	const rollsPoints = rolls.map(roll => parseInt(roll));
	return rollsPoints.reduce((total, roll) => total + roll, 0);
};
