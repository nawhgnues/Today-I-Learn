const spliceTarget = [1, 2, 3, 4, 5];
const spliced = spliceTarget.splice(0, 2, ...[6, 7]);

// splice로 인해 기존 함수가 바뀐다
console.log(spliceTarget); //  [6, 7, 3, 4, 5]
// 배열에서 어떤 요소가 빠졌나 확인하고 싶을땐 splice를 쓸 듯
console.log(spliced); // [1, 2]

// toSpliced()는 원본 배열을 수정하지 않고 제거된 부분으로 새로운 배열을 만든다.
const toSpliceTarget = [1, 2, 3, 4, 5];
const toSpliced = spliceTarget.toSpliced(0, 2, ...[6, 7]);

// toSpliced는 기존 함수에 아무 영향도 끼치지 않는다
// 배열에서 어떤 요소가 빠졌나가 궁금하지 않은 경우 toSpliced를 사용할 듯
console.log(toSpliceTarget); // [1, 2, 3, 4, 5]
console.log(toSpliced); // [6, 7, 3, 4, 5]
