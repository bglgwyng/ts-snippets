//정답률이 높은 문제 순으로 정렬해 보니까 쉬운 문제가 많아 여기 정리하겠습니다!

//https://school.programmers.co.kr/learn/courses/30/lessons/120806
//두 수의 나눗셈
function test1(num1: number, num2: number) {
	return Math.floor((num1 / num2) * 1000);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120807
//숫자 비교하기
function test2(num1: number, num2: number) {
	return num1 === num2 ? 1 : -1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120820
//나이 출력
function test3(age: number) {
	const yearBirth = 2022;
	return yearBirth - age + 1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120817
//배열의 평균값
function test4(numbers: []) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum / numbers.length;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120829
//각도기
function test5(angle: number) {
	return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120831
//짝수의 합
function test6(n: number) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120583
//중복된 숫자 개수
function test7(array: [number], n: number) {
	let answer = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === n) {
			answer++;
		}
	}
	return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120585
//머쓱이보다 키 큰 사람
function test8(array: [number], height: number) {
	return array.filter((num) => num > height).length;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120809
//배열 두 배 만들기
//여기선 reduce를 사용할 수도 있음
function test9(numbers: [number]) {
	const sumArr = [];
	for (let i = 0; i < numbers.length; i++) {
		sumArr.push(numbers[i] * 2);
	}

	return sumArr;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120811
//중앙값 구하기
function test10(array: [number]) {
	for (let i = 0; i < array.length; i++) {
		array.sort((a, b) => a - b);
	}
	return array[Math.floor(array.length / 2)];
}
