//https://school.programmers.co.kr/learn/courses/30/lessons/181929
//원소들의 곱과 합

export default function solution(num_list: []) {
	let sumX = 1;
	let sumY = 0;

	for (const num of num_list) {
		sumX *= num;
		sumY += num;
	}

	const sumYSquared = sumY ** 2;
	return sumX > sumYSquared ? 0 : 1;
}
