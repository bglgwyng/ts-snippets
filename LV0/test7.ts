//https://school.programmers.co.kr/learn/courses/30/lessons/181921
//배열 만들기2

export default function solution(l: number, r: number) {
	//변수에는 타입을 직접 쓰지 않고 설정되어지도록 놔두는 것이 좋다
	const answer = [];

	for (let i = l; i <= r; i++) {
		const arr = String(i);

		//includes 메서드는 배열에 특정 요소가 포함되어 있는지 여부를 확인함
		if (!arr.includes("5") || !arr.includes("0")) continue;
		answer.push(i);
	}

	return answer.length ? answer : [-1];
}
