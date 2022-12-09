export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	return frames
		.map(frame => {
			const rolls = frame.split("-");
			const points = rolls.map(roll => parseInt(roll));
			return points[0] + points[1];
		})
		.reduce((score, points) => score + points, 0);
};
