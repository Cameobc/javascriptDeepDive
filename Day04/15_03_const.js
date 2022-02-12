// const
// 상수(constant) 를 선언하기 위해 사용하나 반드시 상수만을 위해 사용하지는 않는다

// 01. 선언과 초기화
// - const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 함
// 안그럴시 에러 발생(SyntaxError)
// let 과 동일하게 변수 호이스팅이 발생하지 않는 것처럼 동작
const foo = 1;

// 02. 재할당 금지

// 03. 상수
// - const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없음
// 재할당이 금지된 변수이기 떄문임

//세전 가격
let preTaxPrice = 100;

//세후 가격
//01.의 의미를 명확히 알기 어려워 가독성이 좋지 않음
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
console.log(afterTaxPrice);

// 대문자로 표현하며 여러 단어의 조합인 경우 _(언더스코어) 이용하여 스네이크 케이스로 표시
const TAX_RATE = 0.1;
console.log(preTaxPrice + (preTaxPrice*TAX_RATE));

// 04. const 키워드와 객체
// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있음
// 재할당을 금할 뿐 '불변' 을 의미하지 읂는다.
const person = {
    name: 'const',
    age: 11,
};

person.age = 222;
console.log(person);

// - ES6 를 사용한다면 var 키워드를 사용하지 않는다
// - 재할당이 필요한 경우에 한정해 let 키워드를 사용하며, 이때 변수의 스코프는 최대한 좁게 만든다
// - 변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 const 키워드 사용

