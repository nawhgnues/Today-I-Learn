// find()는 인자로 전달한 조건을 만족하는 요소가 배열에 있을 경우 가장 처음에 발견한 요소를 반환한다(없다면 undefined를 반환한다).
const findTarget = [1, 2, 3, 4, 5];

const found = findTarget.find((el) => el > 2);
const notFound = findTarget.find((el) => el > 5);

console.log(found); // 3
console.log(notFound); // undefined

// findLast() find의 동작을 배열의 마지막 요소부터 시작한다.
const lastFound = findTarget.findLast((el) => el > 3);
const notLastFound = findTarget.findLast((el) => el < 1);

console.log(lastFound); // 5
console.log(notLastFound); // undefined

// 배열의 뒷쪽부터 탐색하면서 조건에 해당하는 요소의 인덱스를 반환한다(요소를 찾지 못했을 경우 -1을 반환한다).
const findLastTarget = [1, 2, 3, 4, 5];

const foundIndex = findLastTarget.findIndex((el) => el > 2);
const notFoundIndex = findLastTarget.findIndex((el) => el > 5);

console.log(foundIndex); // 2
console.log(notFoundIndex); // -1

const lastFoundIndex = findLastTarget.findLastIndex((el) => el > 3);
const notLastFoundIndex = findLastTarget.findLastIndex((el) => el < 1);

console.log(lastFoundIndex); // 4
console.log(notLastFoundIndex); // -1
