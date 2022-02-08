// 타입 변환과 단축 평가

// 01.타입 변환
// - 타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것
// 1-1.명시적 타입변환(=타입 캐스팅) : 개발자가 의도적으로 값을 변환
// 명시적으로 타입을 변경하는 방법
//  : 표준 빌트인 생성자 함수(String, Number, Boolean)을 new 연산자 없이 호출, 빌트인 메서드 사용, 암묵적 타입변환 사용
// String 으로 변환하는 방법 3가지
console.log(typeof String(NaN));
console.log(typeof (Infinity).toString());
console.log(typeof (true + ''));
// Number 타입으로 변환하는 방법 4가지
Number('0');
parseInt('10.53');
+'1';
'0' *1;
// Boolean 타입으로 변환 2가지
Boolean('x');
!!'x';

// 1-2.암묵적 타입변환(=타입강제변환) : JS 엔진에 의해 암묵적으로 타입이 변환
console.log(!0);
console.log(`1 + 1 = ${ 1+ 1}`);
console.log(({}+''));
//console.log((Symbol())+ ''); coercion.js: Uncaught TypeError: Cannot convert a Symbol value to a string
console.log([10, 20] +'');

// JS 엔진은 Boolean 값을 타입이 아닌
// Truthy 값(참으로 평가되는 값) 과 Falsy 값(거짓으로 평가되는 값)으로 구분함
// Falsy 값 : 0, -0, null, undefined, '', flase, NaN

// 2. 단축 평가
// - 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
console.log('cat' && 'dog');
console.log('cat' || 'dog');

// 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환. 나머지 평가과정 생략
// true || anything => true
// false || anything => anything
// true && anything => anything
// false && anything => false
// - 객체를 가리키기를 기대하는 변수가 null 또는 undefined 가 아닌지 확인하고 프로터피 참조하는 경우 많이 사용
let elem = null;
// let value = elelm.value; -> value of null error
let value = elem && elem.value;

//단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str){
    str = str || '';
    return str.length;
}
//ES6 에서의 매개변수 기본값 설정
function getStringLength2(str = ''){
    return str.length;
}
console.log(getStringLength());
console.log(getStringLength(12));
console.log(getStringLength('12'));

// 3. 옵셔널 체이닝 연산자 : ?.
// ES11 도입. 좌항의 피연산자가 null || undefined 인 경우 undefined 반환 
let elem2 = null;
let value2 = elem2?.vlaue2;
console.log(value2);
let str2 = '';
let strLength2 = str2 ?. strLength2;
console.log('strLength2', strLength2);

// 옵셔널 체이닝 연산자 도입 이전에는 논리 연산자 && 연산자를 사용했다.
// 옵셔널 체이닝 연산자와는 달리 Falsy 값 그대로 반환
let elem3 = null;
let value3 = elem3 && value3;
console.log(value3);
// 문자열 길이는 참조 못함
let str = '';
let strLength = str && strLength;
console.log(strLength);

// 4. null 병합 연산자 (??)
// ES11 에서 도입. 좌항의 피연산자가 null || undefined 인 경우 우항 연산자 반환
let foo = null ?? 'default string';
console.log(foo);

// ?? 도입 전에는 논리 연산자(||) 사용했음
// 좌항의 피 연산자가 Falsy 값을 지니면 우항의 피연산자를 반환
let foo2 = null || 'test';
console.log(foo2);

let foo3 = '' ?? 'default str';
let foo4 = '' || 'test22';
console.log(foo3);
console.log(foo4);