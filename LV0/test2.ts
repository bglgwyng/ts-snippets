//https://school.programmers.co.kr/learn/courses/30/lessons/181928
//이어 붙인 수

export default function solution(num_list: [number]) {
	let oddSum = "";
	let evenSum = "";

	for (const i of num_list) {
		if (i % 2 !== 0) {
			oddSum += i;
		} else {
			evenSum += i;
		}
	}
	return Number(oddSum) + Number(evenSum);
}
