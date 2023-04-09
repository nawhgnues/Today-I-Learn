/**
배열 T를 받아 배열의 첫번째 원소를 반환해 주는 제네릭 First<T>를 구현해보세요.

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
 */

type First<T extends any[]> = T extends [] ? never : T[0];
