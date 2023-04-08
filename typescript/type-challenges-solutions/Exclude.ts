/**
 * 내장타입인 Exclude<T, U>를 구현해보세요. T에 있는 타입 중 U에 할당 가능한 타입들을 제거해야 합니다.
 */

type T0 = Exclude<"a" | "b" | "c", "a">; // expected "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // expected "c"

type MyExclude<T, U> = T extends U ? never : T;
