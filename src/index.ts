export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	return getRegularPointsFromFrames(frames) + getExtraPointsFromFrames(frames);
};

const getRegularPointsFromFrames=(frames: string[]): number => {
	return frames
		.map(frame => {
			if (frame.endsWith("/")) return 10;
			if (frame === "X") return 10;

			const rolls = frame.split("-");
			const points = rolls.map(roll => parseInt(roll));
			return points[0] + points[1];
		})
		.reduce((score, points) => score + points, 0);
}

const getExtraPointsFromFrames=(frames: string[]): number => {
	let score = 0;
	for (let index = 0; index < frames.length; index++) {
		const frame = frames[index];
		const nextFrame = frames[index + 1];
		if (frame.endsWith("/")) {
			const rolls = nextFrame.split("-");
			const points = rolls.map(roll => parseInt(roll));
			score = score + points[0];
		}
		
	}
	return score;
};
