/**
Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

예시: 들어 Promise<ExampleType>이 있을 때, ExampleType을 어떻게 얻을 수 있을까요?
 */

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

// answer
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;
