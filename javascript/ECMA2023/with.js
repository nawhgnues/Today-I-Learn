/**
 * with를 사용하여 배열의 요소를 쉽게 조작할 수 있다
 */

const a = [1, 2, 3, 4];
const b = a.with(3, 5);

/**
 * with 역시 기존 함수에 어떤 영향도 주지 않는다
 */
console.log(a);
console.log(b);
