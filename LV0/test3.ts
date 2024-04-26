//https://school.programmers.co.kr/learn/courses/30/lessons/181927
//마지막 두 원소

export default function solution(nums: number[]): number[] {
	const x = nums.at(-1)!;
	const y = nums.at(-2)!;

	nums.push(x > y ? x - y : x * 2);
	return nums;
}
