// caller 프로퍼티
// ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이며 이후로도 표준화될 예정 없음
// 함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가리킴
function foo(func){
    return func();
}

function bar(){
    return 'caller :: ' + bar.caller;
}

// 브라우저에서 실행한 결과로 node.js 와 다름
console.log(bar()); // null
console.log(foo(bar)); // function foo(func){ return func();}

console.log('============================');

// length 프로퍼티
// 함수 객체로 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
// 주의 :: arguments 객체의 length 프로퍼티는 프로퍼티의 인자 개수(argument)를 가리키고,
// 함수 객체의 length 프로퍼티는 매개 변수(parameter)의 개수를 가리킨다.
function foo1(){};
console.log(foo1.length);
function bar1(x){
    return x;
}
console.log(bar1.length);

function baz(x, y){
    return x * y;
}
console.log(baz.length);

console.log('============================');

// name 프로퍼티
// ES6 부터 정식으로 표준이 되었다.
// ES5 와 ES6 에서 동작을 달리함
// ES5 :: 익명함수일 경우 빈 문자열을 값으로 가짐
// ES6 :: 익명함수일 경우 함수 객체를 가리키는 식별자를 값으로 가짐

// 기명 함수 표현식
var namedFunc = function foo(){};
console.log(namedFunc.name);

// 익명 함수 표현식
var anoymousFunc = function(){};
console.log(anoymousFunc.name);

// 함수 선언문(Function Declaration)
function bar3(){};
console.log(bar3.name);

console.log('============================');

// __proto__ 접근자 프로퍼티
// 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가지며, 이 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
// __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티
// 내부 슬롯에는 직접 접근할 수 없고, 간접적인 접근 방법을 제공하는 경우에 한하여 접근가능
const obj = {a: 1};
// 객체 리터럴 방식으로 생성한 객체의 프로포타입 객체는 Object.prototype
console.log(obj.__proto__ === Object.prototype);

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype 의 프로퍼티를 상속받음
// hasOwnProperty 메서드는 Object.prototype 의 메서드임
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__prototype__'));

// hasOwnProperty() 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true 반환
// 상속받은 프로퍼티 키는 false 반환

console.log('============================');

// prototype 프로퍼티
// prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor 만이 소유하는 프로퍼티임
// 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor 에는 prototype 프로퍼티가 없음
// 함수 객체는 prototype 프로퍼티를 소유함
console.log(function (){}.hasOwnProperty('prototype'));

// 일반 객체는 prototype 프로퍼티를 소유하지 않음
console.log({}.hasOwnProperty('prototype'));