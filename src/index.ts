export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");

	const framesPoints = frames.map(frame => {
		const rolls = frame.split("-");
		const rollsPoints = rolls.map(roll => parseInt(roll));
		return rollsPoints.reduce((total, roll) => total + roll, 0);
	});

	return framesPoints.reduce((total, framePoints) => total + framePoints, 0);
};
