function getArea(radius) {
	let result = (radius ** 2) * Math.PI;
	return result;
};

let givenRadius = 6;
let circleArea = getArea(givenRadius);
console.log(`The area of a circle with a radius of ${givenRadius} is ${circleArea}.`);

function checkScore(score, totalScore) {
	let isPassed = undefined;
	let percentage = score/totalScore;
	if (percentage > 0.75) {
		isPassed = true;
	} else {
		isPassed = false;
	};
	return isPassed;
};

let givenScore = 60;
let totalScore = 100;
let isPassingScore = checkScore(givenScore, totalScore);
console.log(`Have I passed with my score of ${givenScore}? The answer is: ${isPassingScore}.`);

//By Nathan B. Amata BCS24