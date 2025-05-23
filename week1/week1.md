https://butter-grape-110.notion.site/1-1cfa3ff8be0e807fa72ed1f241574c8d?pvs=4

# 📌 4장 요약 정리 (변수)
## 변수 (식별자)
- 하나의 값을 저장하기 위해 확보한 메모리 공간 또는 메모리 공간을 식별하기 위해 붙인 이름.
- 자바스크립트 엔진은 메모리 공간에 접근해 저장된 값을 반환, 변환한다. (식별자와 메모리 주소는 매핑 관계를 가지고 매핑 정보 또한 메모리에 저장된다.)
- **메모리**
    - 데이터를 저장할 수 있는 메모리 셀의 집합체. 1바이트 단위로 데이터를 저장하거나 읽어들인다.
    - 모든 값은 2진수로 저장되며 값은 메모리 상의 임의의 위치에 저장된다.
    - cpu를 통해 생성된 값은 메모리의 임의의 공간에 저장된다.
    - 메모리 공간에 접근하는 것은 오류를 발생할 가능성이 높으므로 js는 개발자의 메모리 제어를 허용하지 않는다. 또한 실행될 때마다 메모리 주소가 바뀌므로 제어가 불가능하다고 볼 수 있다.

### 변수 선언
- 변수를 선언할 때 var, let, const 키워드를 사용하며 변수 선언이란 변수를 생성하는 것을 말한다. (변수 이름과 메모리 공간 주소 연결)
- **ES5와 ES6 (var과 let, const)**
    - var는 함수 레벨 스코프를 지원한다. 반면 let과 const는 블록 레벨 스코프를 지원한다.
    - (함수 레벨 스코프는 함수 내부에서만 변수가 유효한 것이고 블록 레벨 스코프는 {}로 감싸진 블록 내부에서만 변수가 유효한 것이다. ) - 함수 레벨 스코프는 블록은 무시하지만 함수는 무시하지 않고 블록 레벨 스코프는 다 무시함
    - (스코프: 변수에 접근할 수 있는 유효 범위)
- **함수 레벨 스코프**

```
function a() {
  var variable = 1;
}
console.log(variable) // ReferenceError: variable is not defined

if (true) {
  var variable = 1;
}
console.log(variable) // 1
```

- **블록 레벨 스코프**

```
function a() {
  const constance = 1;
}
console.log(constance) // ReferenceError: constance is not defined

if (true) {
  let string = '';
}
console.log(string) // ReferenceError: string is not defined
```

- **실행 컨택스트**
    - 자바스크립트 엔진이 소스코드를 평가하고 실행하기 위해 필요한 환경을 제공하고 실제로 결과를 관리하는 영역.

### 호이스팅
- 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징
- 모든 선언문은 런타임 이전 단계에서 먼저 실행됨

### 값의 할당과 재할당
- 값을 할당할 때엔 (=)을 사용한다. 우변이 좌변에 대입된다.
- **변수 선언은 소스 코드가 실행되는 시점인 런타임 이전에 실행되지만 값의 할당은 런타임에 실행된다.** (선언과 할당을 한 줄에 쓴다 하더라도 실행되는 시점이 다른 것이다. 하여 초기화에서 undefined가 할당된다.)
- const(상수)는 재할당이 불가하다.
- 할당을(엄밀히 말하면 재할당) 할 때에는 undefined가 있는 메모리 주소에 값을 저장하는 것이 아닌 새로운 메모리 공간을 확보해 저장한다.
- **가비지 콜렉터**
    - 프로그램이 할당한 메모리 공간을 주기적으로 검사해서 메모리를 해제하는 기능. 언제 일어날지는 아무도 모른다.
- **매니지드 언어와 언매니지드 언어**
    - **언매니지드 언어** - malloc()과 free()와 같은 저수준 메모리 제어 기능을 제공함으로써 개발자의 역량에 따라 최적의 메모리 성능을 확보할 수 있다. 그만큼 오류도 만들어낼 수 있다. (ex. c)
    - **매니지드 언어** - 메모리 할당 및 해제를 언어 차원에서 관리한다. 메모리의 해제는 가비지 콜렉터가 수행하며 성능 면에서 손실이 있을 수는 있다.

### 식별자 네이밍 규칙
- 식별자는문자, 숫자,  (_), ($)를 포함할 수 있고 숫자로 시작하는 것은 허용하지 않는다. 또한 예약어를 사용해선 안된다.

![image.png](attachment:eef57e4d-207e-4b17-b573-0812e951bfe6:image.png)

- 변수는 쉼표로 구분할 수 있고 알파벳 외의 언어를 사용할 수 있지만 권장하지 않는다.
- 대소문자를 구분한다.
- 변수의 이름은 누구나 알아볼 수 있게 짓는다.
- **카멜 케이스**
    - 첫 글자는 소문자로, 이어 오는 다른 명사의 첫 글자는 대문자로 표현한다.
    - 변수나 함수 이름에 사용
- 스네이크 케이스
    - 첫 글자는 소문자로, 이어 오는 다른 명사를 이어 붙일 때에는 (_) 언더바를 사용한다.
    - 생성자 함수, 클래스의 이름에 사용
- **파스칼 케이스**
    - 모든 명사의 앞 글자만 대문자로 쓴다.

# 📌 5장 요약 정리 (표현식과 문)
### 값의 정의
- 값은 식이(표현식) 평가되어 생성된 결과이다.

### 리터럴
- **정의:** 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법
- 우리가 코드에 작성하는 숫자나 문자는 아라비아 숫자와 문자가 아니라 **숫자 리터럴**과 **문자 리터럴**이다.
- 자바스크립트 엔진은 코드가 실행되는 시점인 **런타임에** 리터럴을 평가에 값(컴퓨터가 이해할 수 있는 값)을 생성하게 된다.
    - 부동 소수점 리터럴(10.5), 2진수 리터럴(0b로 시작), 8진수 리터럴(0o로 시작), 16진수 리터럴(0x로 시작)

### 표현식
- **정의:** 값으로 평가될 수 있는 문은 모두 표현식이다.
    - 리터럴 표현식, 식별자 표현식, 연산자 표현식 등이 있다.
- 표현식과 표현식이 평가된 값은 동등한 관계 즉 동치라고도 불리며 이는 값이 위치할 수 있는 자리에 표현식이 올 수 있다는 것을 의미한다.
- 우리가 코드를 작성할 때 x+3과 같이 x를 사용할 수 있는 것은 x+3이 표현식이기 때문이고 x가 정의되어 있고 할당되어 있다면 x는 할당 값과 동치이기 때문이다. (x 자체로도 표현식임)

### 문
- **정의:** 프로그램을 구성하는 기본 단위이자 최소 실행 단위이며 여러 토큰으로 구성된다.
    - 더 이상 나눌 수 없는 코드. 모든 것이 토큰이라 봐도 무방함.
- 문을 실행시키면 무엇인가 일어나게 되고 즉 컴퓨터에 내리는 명령이라고도 볼 수 있다.

### 세미콜론
- **정의:** (;) 문의 종료를 나타낸다. 즉 세미콜론 단위로 문을 실행한다.
- 코드 블록(if, for 문, 함수 등)은 언제나 문의 종료를 의미하는 자체 종결정을 갖기 때문에 세미콜론을 붙이지 않는다.
- **ASI(automatic semicolon insertion)**
    - **정의:** 자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여주는 기능
    - **단점:** 세미콜론 자동 삽입 기능의 동작과 개발자의 예측이 일치하지 않는 경우가 간혹 있어 오류가 날 수 있다.
    - ESLint같은 정적 분석 도구에서 세미콜론 사용을 기본으로 설정하고 있고 TC39도 세미콜론 사용을 권장하는 분위기 이기 때문에 사용하는 것도 나쁘지 않다.

### 표현식과 문의 차이
- **표현식인 문:** 값으로 평가될 수 있는 문 (ex. var x = 100;)
- **표현식이 아닌 문:** 값으로 평가될 수 없는 문 (ex. var x;)
- 값을 할당해보면 된다.

# 📌 6장 요약 정리 (데이터 타입)
## 타입 정의
- 값의 종류를 말한다. js의 모든 값은 데이터 타입을 갖는다.
- **원시 타입**
    - 숫자, 문자열, 불리언, undefined, null, symbol 타입
- **객체 타입**
    - 객체, 함수, 배열

### 숫자 타입
- 자바스크립트는 하나의 숫자 타입만 제공한다. 모두 10진수로 해석된다. 정수로 표시해도 실수로 해석된다. (1==1.0)
- Infinity, -Infinity, NaN 값도 있음 *대소문자 구별 해야함

### 문자열 타입
- “”, ‘’, ``로 텍스트를 감싸 표현한다. (일반적으로 '' 작은 따옴표를 사용한다.) (감싸 표현하지 않으면 식별자 같은 토큰으로 인식하기에 꼭 감싸야 한다.)
- C와 java와 다르게 js의 문자열은 원시 타입이며 변경 불가하다.
- **템플릿 리터럴 (`` 백틱 사용)**
    - **멀티라인 문자열**
        - 일반 문자열 내에선 줄바꿈이랑 탭 등을 표현하기 위해 이스케이프 시퀀스(\0, \b, \n 등)를 사용해야 함.
        - 이스케이프 시퀀스를 사용하지 않고도 줄바꿈을 허용. 공백도 똑같이 적용
    - **표현식 삽입**
        - 표현식을 삽입하기 위해 ${}으로 표현식을 감사 표현. 강제로 문자열로 바꿔 나온다.
    - **태그드 템플릿**
        - js의 값을 조회할 때 사용된다. 표현식 삽입과 동일하게 작동된다.

### 불리언 타입
- true와 false

### undefined 타입
- var로 선언한 변수는 undefined로 초기화 된다. 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 쓰레기 값으로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화 한다.
- 개발자가 변수에 undefined를 할당하는 것은 허용하지 않으며 값이 없다는 것을 표기할 때는 null을 사용하면 된다.
    - null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 것을 의미하기도 한다.

### symbol 타입
- 변경 불가하고 다른 값과 중복되지 않는 유일무이한 값이다. 객체의 유일한 프로퍼티 키를 만들기 위해 사용되며 다른 원시 값과 달리 Symbol() 함수를 호출해 생성된다.

### 데이터 타입의 필요성
- 메모리 공간의 낭비와 손실을 없애기 위해서
- 변수에 할당되는 값의 데이터 타입에 따라 확보해야 할 메모리 공간의 크기가 결정된다.
1. 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
2. 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
3. 메모리에서 읽어 들인 2진수를 어떻게 해석할 지 결정하기 위해

### 동적 타입과 정적 타입
- **정적 타입 언어**
    - 정적 타입 언어는 데이터 타입을 사전에 선언해야 한다. (명시적 타입 선언)
    - 처음 선언한 타입을 변경할 수 없으며 타입에 맞는 값만 할당할 수 있다.
    - 컴파일 시점에 타입 체크를 진행하며 타입 체크를 통과하지 못했다면 실행을 막고 에러를 발생시킨다. 정적 타입 언어는 이 에러를 줄인다.
    - c, c++, java, kotilin, go 등이 있다.
- **동적 타입 언어**
    - js는 타입을 선언하지 않고 var, let, const 키워드를 이용해 변수를 선언한다.
    - 값을 할당하는 시점에 변수의 타입이 결정된다.
    - **단점:**
        - 언제든지 변경될 수 있기에 복잡한 프로그램에서는 변화하는 변수 값을 추적하기 어려울 수 있다.
        - 또한 변수 값을 확인하기 전까지 타입을 확신할 수 없다.
        - 자바스크립트 엔진의 예측이 개발자의 의도와 일치하지 않을 수 있다.
    - 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다.
- **typeof**
    - 변수에 할당된 값의 데이터 타입을 반환한다.

### 변수 사용 시 유의 사항
- 변수의 개수는 필요한 만큼 최소한으로
- 변수의 유효 범위는 최대한 좁게
- 전역 변수의 사용 자제
- 변수보다는 상수(const) 사용
- 변수의 이름은 목적이나 의미가 드러나게

# 📌 질문 생성
## 4장
- 1. 실행 컨텍스트에 대해 설명해주세요.
- 2. undefined가 무엇인지 설명하고 새로운 값을 할당할 경우 undefined가 저장되어 있던 메모리 공간은 어떻게 되는지 설명해주세요.
- 3. ReferenceError에 대해 설명해주세요.
## 5장
- 1. 다음 코드 중 표현식은 무엇인지 문은 무엇인지 골라주시고 다음 코드에서 알 수 있는 표현식과 문의 차이점을 설명해주세요. 10+5 / 10+5;
- 2. 다음 코드에서 문은 무엇인지, 표현식은 무엇인지 말해주시고 표현식은 어떤 표현식인지 (ex. 함수 표현식) 말해주세요. const x = 3;
- 3. ASI가 무엇인지 설명해주시고 단점을 설명해주세요.
## 6장
- 1. ES6에서 추가된 7번째 타입이 무엇인지 말해주시고 해당 타입에 대해 간략하게 설명해주세요.
- 2. javascript는 어떤 타입의 언어인지 말해주시고 javascript가 해당 타입의 언어여서 가지는 장단점에 대해 설명해주세요.
- 3. console.log(2*”DEPth”); 해당 결과값을 유추하고 그 결과값이 나타내는 의미를 설명해주세요.