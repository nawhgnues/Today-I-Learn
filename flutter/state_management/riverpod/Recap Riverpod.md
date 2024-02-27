_Riverpod 정리 글_

> ### Riverpod
> 플러터의 패키지 중 하나로 GetX, Provider, BLoC처럼 상태관리를 위한 패키지이다. (Provider의 확장판(?) 정도로 생각할 수 있는 것 같다.)


### Package 설정
```
// pubspec.yaml
dependencies:
  
  // dart
  riverpod:
  
  // flutter
  flutter_riverpod:

  // flutter & flutter_hooks
  flutter_hooks: 
  hooks_riverpod: 
```

### 기본 개념

### 1. Providers

사용할 provider를 정의하는 부분이다. 즉 위젯에서 공통적으로 사용하고 싶은 데이터를 정의한다고 생각하면 된다.

#### 1-1 Provider

```
final valueProvider = Provider<int>((ref) {
  return 0;
});
```

가장 간단한 기본 형태의 Provider이다. 읽기만 가능하며 값을 변경할 수 없다.

#### 1-2 StateProvider

```
final counterStateProvider = StateProvider<int>((ref) {
  return 0;
});
```

StateProvider는 상태를 변경할 수 있는 Provider이다. 내부 상태는 state로 접근이 가능한데, 사용하고자 하는 위젯에서 state값을 직접 변경할 수 있다.

#### 1-3 StateNotifierProvider

```
class Counter extends StateNotifier<int> {
  Counter() : super(0);

  void increment() => state++;
  void decrement() => state--;
}

final counterStateNotifierProvider = StateNotifierProvider<Counter, int>((ref) {
  return Counter();
});
```

StateNotifierProvider는 상태 뿐만 아니라 일부 로직을 함께 저장할 때 사용된다. 예를 들어 다른 Provider와 결합을 하거나, 내부에서 사용할 로직을 정의할 수 있다.

### Reading a provider

#### ProviderScope

```
void main() {
  runApp(
    ProviderScope(
      child: MyApp(),
    ),
  );
}
```
Provider를 사용하려면 먼저 전체 앱을 `ProviderScope`로 감싸줘야 한다. 

#### WidgetRef

```
// Provider 정의
final valueProvider = Provider<int>((ref) {
  return 0;
});

// ConsumerWidget 사용
class MyHomePage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final value = ref.watch(valueProvider);
    return Scaffold(
      body: Center(
        child: Text(
          'Value: $value',
        ),
      ),
    );
  }
}
```
riverpod에서 정의한 `WidgetRef`를 이용해 접근이 가능한데, 이 `WidgetRef`는 Widget과 Provider사이에 상호 작용을 도와주는 역할을 한다. 즉 `WidgetRef`를 통해 특정 Widget에서 특정 Provider에 접근이 가능하다고 생각하면 된다.

`WidgetRef`를 사용하려면 `Consumer`, `ConsumerWidget`, `ConsumerStatefulWidget`을 통해 사용이 가능하다


#### WidgetRef를 이용해 읽기

WidgetRef를 이용해서 Provider에 접근이 가능한데 크게 3가지 방식을 접근이 가능하다. watch, listen, read를 제공하는데 문서에서는 대부분의 기능에서는 watch 사용을 권장하고 있다. 3가지 메서드 모두 다 값을 읽는 것은 동일하지만, 읽고 난 후에 동작이 조금씩 다르다.

**ref.watch**

- 반응형으로 Provider의 값이 변경되면 자체적으로 다시 build 된다.
-  비동기적으로 호출하거나, onTab, initState 등의 생명주기에서는 사용을 하면 안된다.
- 다른 Provider와 결합할 때 아주 유용하게 쓰인다!

**ref.listen**

- Provider의 값이 변경되면 값을 읽는 것이 아니라 정의한 함수를 실행한다.
- ref.watch와 마찬가지로 build 안이나 Provider 안에서 사용되어야 한다.
- SnackBar나 Dialog를 처리하는데 유용하다!

**ref.read**
- Provider의 값을 읽어오기만 한다. 값이 변경되어도 별다른 동작을 하지 않는다.
- 공식 문서에 따르면 특별한 경우가 아니면 사용을 하지 않는 것 같다

> #### 참고사항 
>
> 공식 문서에 따르면 ref.read의 사용은 피해야 한다고 한다. 가능하면 ref.watch를 사용하는 것을 권장하며, ref.read를 build 메소드 내에서 사용하지 말라고 권장하고 있다. 또한 build 수 감소를 위해 ref.read를 사용하는 경우, ref.watch를 사용해도 똑같은 효과를 얻을 수 있다고 한다.
