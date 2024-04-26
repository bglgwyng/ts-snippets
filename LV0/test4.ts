//https://school.programmers.co.kr/learn/courses/30/lessons/181926
// 수 조작하기1

export default function solution(n: number, control: string) {
	for (const i of control) {
		if (i === "w") {
			n += 1;
		} else if (i === "s") {
			n -= 1;
		} else if (i === "d") {
			n += 10;
		} else if (i === "a") {
			n -= 10;
		}
	}
	return n;
}
