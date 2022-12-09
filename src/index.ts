export const getBowlingScore = (game: string): number => {
	const frames = game.split(" ");
	const framesPoints = getFramesPoints(frames);
	const extraPoints = getFramesExtraPoints(frames);
	const additionalRollsPoints = getAdditionalRollsPoints(frames);
	return [...framesPoints, ...extraPoints, ...additionalRollsPoints].reduce((total, framePoints) => total + framePoints, 0);
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
		const nextFrames = frames.slice(index + 1);
		const nextRolls = getPinsKnockedInNextRolls(nextFrames);
		if (frame.endsWith("/")) return nextRolls[0];
		if (frame === "X") return nextRolls[0] + nextRolls[1];
		else return 0;
	});
};

const getAdditionalRollsPoints = (frames: string[]): number[] => {
	const lastFrame = frames[frames.length - 1];
	if (!lastFrame.includes("/") && !lastFrame.startsWith("X")) return [];
	const extraRolls = lastFrame.includes("/") ? lastFrame.replace(/^[0-9]-\/-/, "") : lastFrame.replace(/^X-/, "");
	return getPinsKnockedInTwoRolls(extraRolls);
};

const getPinsKnockedInNextRolls = (nextFrames: string[]): number[] => {
	return nextFrames.map(getPinsKnockedInTwoRolls).flat();
};

const getPinsKnockedInTwoRolls = (frame: string): number[] => {
	const rolls = frame.split("-");
	if (rolls[0] === "X") return rolls.map(roll => 10);
	else if (rolls[1] === "/") return [parseInt(rolls[0]), 10 - parseInt(rolls[0])];
	else return rolls.map(roll => parseInt(roll));
};
