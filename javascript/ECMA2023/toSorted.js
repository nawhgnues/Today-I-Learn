/**
 * toSorted()
 */

const sortTarget = [1, 2, 3, 4, 5];
const sorted = sortTarget.sort((a, b) => b - a); // 내림차순 정렬

// sort의 동작 방식은 함수의 실행 결과가 원본에 영향을 미치지 않는 순수 함수여야 한다는 함수형 패러다임에 부합하지 않는다.
console.log(sortTarget); // [5, 4, 3, 2, 1];
console.log(sorted); // [5, 4, 3, 2, 1];

// 함수의 원본을 해치지 않기 위해서는 전체적인 배열 요소를 한 번 복사하는 과정이 필수적이다(불필요한 단계가 추가된다).
const sortTarget2 = [1, 2, 3, 4, 5];
const sorted2 = [...sortTarget].sort((a, b) => b - a);

console.log(sortTarget2); // [1, 2, 3, 4, 5];
console.log(sorted2); // [5, 4, 3, 2, 1];

// toSorted를 사용하면 새로 정렬된 배열을 반환하기 때문에 원본 배열을 수정하지 않고 정렬된 배열을 얻을 수 있다.
const toSortTarget = [1, 2, 3, 4, 5];
const toSorted = toSortTarget.toSorted((a, b) => b - a);

console.log(toSortTarget); // [1, 2, 3, 4, 5];
console.log(toSorted); // [5, 4, 3, 2, 1];
