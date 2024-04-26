//https://school.programmers.co.kr/learn/courses/30/lessons/181923
//수열과 구간 쿼리2

function solution(arr: number[], queries: [s: number, e: number, k: number][]) {
	const answer = [];
	for (const q of queries) {
		const [s, e, k] = q;

		const r = arr.slice(s, e + 1);
		const x = r.filter((num) => num > k);

		answer.push(x.length ? Math.min(...x) : -1);
	}

	return answer;
}
