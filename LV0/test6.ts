//https://school.programmers.co.kr/learn/courses/30/lessons/181924
//수열과 구간 쿼리 3

//튜플 = 형식이 정해져 있는 배열 (공부해볼것)
//튜플을 쓸 때엔 인덱싱은 그대로 접근하기보단 변수로 만들 것

export default function solution(arr: [], queries: [number, number][]) {
	queries.forEach(([x, y]) => {
		const temp = arr[y];
		arr[y] = arr[x];
		arr[x] = temp;
	});

	return arr;
}
