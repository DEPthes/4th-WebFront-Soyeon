# class-2

### 프로퍼티
- 인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.

```jsx
class Person{
	gendar;//자바와 같은 표기, 클래스 몸체에서 this를 사용해 필드를 정의하면 안된다.
	//초기값을 할당하지 않으면 undefined가 된다.
	#height = '';
	static PI = 3.14;
	
	constructor(color, gendar, height){
		this.color = color;
		this.gendar = gendar;//constructor 안에서 변수를 참조할 땐 this를 꼭 써야한다.
		this.#height = height;
	}
	
	get fullName(){
		return ${this.firstName}${this.lastName};
	}
	
	set fullName(name){
		[this.firstName, this.lastName] = name.split('');
	}
	
	//프로토타입 메서드
	sayHello() {
    console.log("Hello from prototype");
  }

  // 인스턴스 메서드
  sayHi = () => {
    console.log("Hi from instance");
  }
}

const person = new Person("white", "male", "180");
```

- constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다. (프로퍼티 추가 및 초기화)
- es6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자를 지원하지 않는다. (언제나 public)
- **접근자 프로퍼티**
    - 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티
    - getter 함수와 setter 함수로 구성되어 있다. (각각 get과 set 키워드 이용)
- 클래스의 메서드는 기본적으로 프로토타이브이 메서드가 된다.
- **클래스 필드**: 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어
    - 자바스크립트에선 자바와 같이 클래스 필드를 선언하면 문법 에러가 발생한다. (하지만 최신 브라우저나 node.js에서 실행하면 정상 동작한다.)
    - 허나 ecmascript에 표준 사양으로 승급 되지 않았다.
    - 인스턴스를 생성할 대 클래스 필드를 초기화할 필요가 있다면 ocnstructor 밖에서 클래스 필드를 정의할 필요가 없다. (자바와 같이 필드를 정의하지 않는 이유)
- 함수는 일급 객체이므로 함수를 클래스 필드에 할당할 수 있다. (해당 함수는 프로토타입 메서드가 아닌 인스턴스 메서드가 됨)
- **?프로토타입 메서드와 인스턴스 메서드**
    - 정의하는 방식이 다름
- **private 필드**
    - 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조 가능하다. (public)
    - tc39 프로세스의 stage3에 private 필드를 정의할 수 있는 새로운 표준 사양이 제안되어 있다.
    - 변수 명 앞에 #을 붙여주면 된다.
    - private 필드를 인스턴스를 통해 참조하려 하면 SyntaxError가 뜬다.
    - 오직 클래스 내부에서만 참조 가능하다. (접근자 프로퍼티를 통해선 접근 가능하다.)
    - **반드시** 클래스 몸체에 정의해야 한다. constructor가 아닌
- **static 필드**
    - tc39 프로세스의 stage3에 제안되어 있다.
    - static public/private 필드가 최신 브라우저와 node.js에 구현되어 있다.

### 상속에 의한 클래스 확장
- 상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것이다.
- **extends** 키워드를 사용해 class 상속을 하며 간편하고 직관적인 장점이 있다.
- 상속을 통해 확장된 클래스를 **서브클래스(=파생 클래스, 자식 클래스)**, 서브클래스에 상속된 클래스를 **수퍼클래스(=베이스 클래스, 부모 클래스)**라고 부른다.
    - 수퍼클래스와 서브클래스는 인스턴스의 프로토타입 체인뿐 아니라 클래스 간의 프로토타입 체인도 생성한다.
- **동적 상속**
    - extends는 생성자 함수를 상속받을 때도 사용한다.
    - [[Constructor]] 내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 상속받을 수 있다.
- 서브클래스에 constructor를 생략하면 **constructor(…args) {super(..args);}** 가 암묵적으로 정의된다.

### super 키워드
- super를 호출하면 수퍼클래스의 constructor를 호출한다.
- super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
- new를 통해 서브클래스의 인스턴스를 생성하고 서브클래스의 constructor에 매개변수를 전달한다. super 클래스에 넘어가야 할 인수는 **super(..,args())**를 통해 넘어가거나 매개변수를 따로 지정해줘서 넘긴다.
- **super는 자식의 constructor에서 반드시 호출해야 한다. (referenceError 뜸)**
    - super를 호출하기 전까지 this를 참조할 수 없다.
    - 반드시 constructor에서만 호출해야 한다. (syntaxError뜸)

### 상속 클래스의 인스턴스 생성 과정
1. **서브클래스의 super 호출**
    - 자바스크립트 엔진은 내부 슬롯[[ConstructorKind]](수퍼클래스와 서브클래스를 구분하기 위함)]]을 갖는다.
    - **base**는 다른 클래스를 상속받지 않는 클래스, **derived**는 다른 클래스를 상속받는 서브클래스
    - 서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스 생성을 위임한다. (반드시 super를 호출해야하는 이유) (super를 호출 안하면 인스턴스를 생성할 수 없기에 에러 발생)
2. **수퍼클래스의 인스턴스 생성과 this 바인딩**
    - 인스턴스는 수퍼클래스가 생성하지만 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리 (this를 출력하면 자식클래스가 출력)
3. **서브클래스 constructor로의 복귀와 this 바인딩**
    - 서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용
4. **서브클래스의 인스턴스 초기화**
    - 인스턴스에 프로퍼티 추가 및 초기화

### 표준 빌트인 생성자 함수 확장
- String, Number, Array와 같은 표준 빌트인 객체도 [[Construct]] 내부 메서드를 갖는 생성자 함수이므로 extends 키워드를 사용해 확장이 가능하다.

- **메서드 체이닝**: 자기 자신을 반한함으로써 연속적으로 메서드를 호출할 수 있게 하는 기법
- ?부모와 자식 동일한 필드명이 있으면?
    - 자식 클래스가 덮어씀