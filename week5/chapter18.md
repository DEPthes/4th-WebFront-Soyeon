# 18장 함수와 일급 객체
### 일급 객체는 다음 조건을 만족해야 한다.
1. 무명의 리터럴로 생성할 수 있다. 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.

- 함수가 일급 객체라는 말은 함수를 객체와 동일하게 사용할 수 있다는 의미
    - 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.
    - 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)에서 리터럴로 정의 가능
- 일반 객체와의 차이는 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다는 것이다. (ex. func()) 또한 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.
- 함수의 모든 property attribute를 확인하는 메서드: **Object.getOwnPropertyDescriptors()**

### arguments property
- argumets 프로퍼티 값은 arguments 객체
- 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 **유사 배열 객체**
    - 유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체
    - arguments는 유사 배열 객체이자 이터러블이다. (배열 객체에서만 존재하는 push, pop 등의 메서드를 지원하지 않음의 차이 .. 배열 메서드 지원 차이(indexOf..))
    - 배열 메서드를 사용 하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출해야 함
- 함수 내부에서 **지역 변수**처럼 사용 (함수 몸체에서 변수와 동일하게 취급)
- 일부 브라우저에서 지원하고 있지만 ES3부터 표준에서 폐지되어 Function(함수 이름).arguments와 같은 사용법은 권장하지 않으며 arguments 객체를 참조하도록 한다.
- 초과된 인수는 arguments 객체의 프로퍼티로 보관된다.
- 키는 인수의 순서를 나타내며 arguments 객체의 **callee** 프로퍼티는 함수 자신을 가리키고 **length** 프로퍼티는 인수의 개수를 가리킨다.
- arguments 객체를 순회 가능한 자료 구조인 이터러블로 만들기 위한 프로퍼티
    - Symbol(Symbol.iterator) 프로퍼티
- 개수를 확정할 수 없는 **가변 인자 함수**를 구현할 때 유용

### caller 프로퍼티
- ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이다. 표준화될 예정도 없는 프로퍼티이므로 참고로만 알아두면 된다.
- 함수 자신을 호출한 함수를 가리킨다.

### length 프로퍼티
- 함수를 정의할 때 선언한 매개변수의 개수
- arguments 객체의 length 프로퍼티는 함수 객체의 length 프로퍼티 값과 다를 수 있다.
- arguments 객체의 length 프로퍼티는 인자의 개수를, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.

### name 프로퍼티
- 함수의 이름을 나타낸다.
- ES6 이전까지 비표준이었다가 ES6에서 정식 표준이 되었다.
- 함수 객체를 가리키는 식별자를 값으로 갖는다.
- 함수를 호출할 때는 함수 이름이 아닌 함수 객체를 가리키는 식별자로 호출한다.

### __proto__ 접근자 프로퍼티
- [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
- 내부 슬롯에도 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.
- 접근자 프로퍼티
    - 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티입니다. 접근자 프로퍼티의 본질은 함수인데, 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당합니다. 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보입니다.
- hasOwnProperty 메서드
    - 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

### prototype 프로퍼티
- 생성자 함수로 호출할 수 있는 함수 객체 즉 constructor 만이 소유하는 프로퍼티이다.
- 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor (화살표 함수 같은거)에는 prototype 프로퍼티가 없다.