// 프로퍼티 어트리뷰트를 이해하기 위한 선행 과정
// 내부 슬롯(Internal slot) 과 내부 메서드(Internal Method)
// 내부 슬롯과 내부 메서드는 JS 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는
// 의사 프로퍼티(pseudo property)와 의사 메서드(pseudo method)이다.
// ECMAScript 사양에 등장하는 이중 대괄호([[]])로 감싼 이름들이 내부 슬롯과 내부 메서드이다.
// 원칙적으로 직접 접근 불가하나 [[Prototype]] 내부 슬롯의 경우, __proto__ 를 통해 간접적으로 접근 가능
const o = {};
//o.[[Prototype]]
console.log(o.__proto__);

// 02. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// JS 엔진은 프로퍼티를 생성할 때, 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의
// Object.getOwnPropertyDescriptor(변수명, '매개변수프로퍼티키') 메서드를 사용하여 간접적으로 확인할 수 있음
const person = {
    name: 'Lee'
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.age = 22;
// ES8 에서 도입. 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환
console.log(Object.getOwnPropertyDescriptors(person));


// 03. 데이터 프로퍼티와 접근자 프로퍼티
// - 데이터 프로퍼티 : key&value 로 구성. 현재까지 살펴본 모든 프로퍼티
// - 접근자 프로퍼티(accessor property) : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티 값을 읽거나 저장할 때 호출되는 접근가 함수로 구성된 프로퍼티
//  : 접근자 함수는 getter/setter 함수라고도 부른다. 둘 다 정의하거나, 하나만 정의할 수도 있다
const person2 = {
    firstName: 'TTT',
    lastName: 'PPPP',


    //fullName 은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;   
    },
    // setter 함수
    set fullName(name){
        // 배열 디스터럭처링 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.firstName + ' ' + person2.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person2.fullName = 'Test Name';
console.log(person2);

// 접근자 프로퍼티를 통한 프로터피 값의 참조
// 접근자 프로퍼티 fullName 에 접근하면 getter 함수가 호출된다.
console.log(person2.fullName);
// firstName 은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable], [[Configurable]]]
// 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);

// fullName 은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);

// 접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트[[Value]])을 가지지 않으며,
// 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여

// 이를 내부 슬롯/메서드 관점에서 설명하면 다음과 같다.
// 접근자 프로퍼티 fullName 으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작함
// 1. 프로퍼티 키(문자열 || 심벌)가 유요한지 확인.
// 2. 프로토타입 체인에서 프로퍼티를 검색
// 3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인
// 4. 접근자 프로퍼티 fullName 의 프로퍼티 어트리뷰트 [[Get]]의 값(getter 함수)을 호출하여 결과를 반환

// cf) 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로
// 자신의 프로퍼티와 메서드를 하위 객체에게 상속한다.
// 프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.

//일반 객체의 __proto__ 는 접근자 프로퍼티
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

//함수 객체의 __proto__ 는 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function(){}, 'prototype'));