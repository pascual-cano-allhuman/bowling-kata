export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	return getRegularPointsFromFrames(frames) + getExtraPointsFromFrames(frames);
};

const getRegularPointsFromFrames=(frames: string[]): number => {
	return frames
		.map(frame => {
			if (frame.endsWith("/")) return 10;
			if (frame === "X") return 10;

			const points = getPinsKnockedInFrame(frame);
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
			const points = getPinsKnockedInFrame(nextFrame);
			score = score + points[0];
		}
		if (frame === "X") {
			const points = getPinsKnockedInFrame(nextFrame);
			score = score + points[0];
		}
	}
	return score;
};

const getPinsKnockedInFrame = (frame: string): number[] => {
	const rolls = frame.split("-");
	const points = rolls.map(roll => parseInt(roll));
	return points;
}

