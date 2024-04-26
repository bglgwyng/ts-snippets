//https://school.programmers.co.kr/learn/courses/30/lessons/181925
//수 조작하기2

export default function solution(numLog: []) {
	let answer = "";

	//현재 요소와 이전 요소의 차이가 x이면 y추가
	for (let i = 1; i < numLog.length; i++) {
		const diff = numLog[i] - numLog[i - 1];
		answer += diff === 1 ? "w" : diff === -1 ? "s" : diff === 10 ? "d" : "a";
	}

	return answer;
}
