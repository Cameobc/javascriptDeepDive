// primitive type - immutable value
// object type - mmutable value
// 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 key, value 로 구성되어 있다.
// 객체 생성 방식 : 객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create, 클래스(ES6)
// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 || 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용 가능한 모든 값
// ex ) 프로퍼티 키 동적 생성
let obj = {};
let key = 'hello';
//ES5: 키 동적 생성
obj[key] = 'world';
//ES6 : 계산된 프로퍼티 이름
// let obj = {[key]: 'world'};
console.log(obj);

// 메서드
// 프로퍼티 값이 함수인 경우
let circle = {
    radius: 5, // property
    //원의 지름
    getDiameter: function(){
        return 2*this.radius;
    }
};
console.log(circle);
console.log(circle.getDiameter());

//프로퍼티에 접근하는 두 가지 방법
let person = {name:'namenamename'};
// - 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법(dot notation)
console.log(person.name);
// - 대괄호 프로퍼티 접근 연산자(['key'])를 사용하는 대괄호 표기법(bracket notation)
console.log(person['name']);

//cf)
let person2 = {'last-name':'MM', 1: 10};
//person2.last-name 
//node.js => referenceError : name is not defined
// web -> NaN
// JS 엔진은 먼저 person.last  를 평가(undefined)
// undefined-name 으로 name 식별자를 찾는데 브라우저 환경에는 name 라는 전역 변수가 존재함.

//프로퍼티 동적 생성
let person3 = {name:'test'};
person3.age = 10;
console.log(person3.age);

//프로퍼티 삭제
// delete
delete person3.age;
delete person3.address; // 존재하지 않는 프로퍼티지만 에러가 발생하지 않는다.
console.log(person3);

//ES6에서 추가된 객체 리터럴의 확장 기능
// - 프로퍼티 축약 표현
//ES5
let x = 1, y =2;
let obj2 = {x:x, y:y};
console.log(obj2);
//ES6 에서는 변수명과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략 가능(변수명으로 자동 생성)
//ES6
let x2 = 1, y2 =2;
const obj3 = {x2,y2};
console.log(obj3);

//계산된 프로퍼티 이름(computed property name)
//ES5
var prefix = 'prop';
var i = 0;
var obj4 = {};
obj4[prefix + '-' + i++] = i;
obj4[prefix + '-' + i++] = i;
obj4[prefix + '-' + i++] = i;
console.log(obj4);
//ES6 
const prefix2 = 'prop';
let i2 = 0;
const obj5 = {
    [`${prefix2}-${i2++}`] : i2,
    [`${prefix2}-${i2++}`] : i2,
    [`${prefix2}-${i2++}`] : i2,
};
console.log(obj5);

//메서드 축약 표현
//ES5
var obj6 = {
    name: 'Lee',
    sayHi: function(){
        console.log('Hi ' + this.name);
    }
};
obj6.sayHi();
//ES6
let obj7 = {
    name: 'test!',
    sayHi(){
        console.log('Hi ', this.name);
        console.log(`test my ${this.name}`);
    }
};
obj7.sayHi();