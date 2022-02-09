// primitive Type : immutable value, 할당 시 변수에 실제 값이 저장된다.
// - pass by value(값에 의한 전달) : 다른 변수에 할당 시 원시 값이 복사되어 전달
// object/reference Type : mmutable value, 할당 시 참조 값이 저장된다.
// - pass by reference(참조에 의한 전달) : 원본의 참조 값이 복사되어 전달
// 상수는 재할당이 금지된 변수이나, 변수에 할당한 객체는 변경가능하다.
const o = {};
o.a =1;
console.log(o);

// 문자열
// 유사 배열 객체로 인덱스를 사용하여 각 문자에 접근할 수 있으나, 원시 값이므로 변견 불가(에러는 나지 않는다)
let str = 'Hello';
str[4] = 'l';
console.log(str[4]);

// pass by value (=pass by sharing(공유에 의한 전달))
// 값에 의한 전달은 자바스크립트를 위한 용어가 아님
// 엄격하게 표현하자면 변수에는 값이 전달되는 것이 아니라 메모리 주소가 전달되고,
// 식별자는 값이 아닌 메모리 주소를 기억하기 때문이다.
let score = 80;
let copy = score;
console.log(score, copy);
console.log(score === copy);
score = 100;
console.log(score, copy);
console.log(score === copy);

// 객체는 원시 값과 달리 사전에 확보해야 할 메모리 공간의 크기를 정해둘 수 없다.
// V8 엔진에서는 프로퍼티에 접근하기 위해 동적 탐색 대신 히든 클래스 라는 방식을 사용하여 성능 보장
// 원시 값을 할당한 변수를 참조하면 메모리에 저장되어 있는원시 값에 접근하나
// 객체를 할당한 변수를 참조하면 메모리에 저장되어 있는 참조 값을 통해 실제 객체에 접근한다.
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
let person = {name: 'tset'};
console.log(person);
// 객체는 변경 가능한 값으로 재할당 없이 프로퍼티를 동적으로 추가하거나 값을 갱신/삭제 할 수 있다.
person.name = 'Kim';
person.age = 10;
console.log(person);
delete person.age;
console.log(person);
// 여러 개의 식별자가 하나의 객체를 공유할 수 있다는 부작용 존재

// cf) 얕은 복사(shallow copy) 와 깊은 복사(deep copy)
// 객체를 프로퍼티 값으로 갖는 객체의 경우 얕은 복사는 한 단계까지만 복사하는 것
// 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것
const copyObj = {x: {y:1}};
//얕은 복사
const c1 = {...copyObj};
console.log(c1 === copyObj);
console.log(c1.x === copyObj.x);

// lodash 의 cloneDeep 를 사용한 깊은 복사
//const _ = require('lodash');
//const c2 = _.cloneDeep(copyObj);
//c2 === copyObj; // false
//c2.x === copyObj.x; // false

// 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른객체.
// 원본과 복사본은 참조 값이 다른 별개의 객체
// cf) 다음과 같이 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사,
// 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는 경우도 있음
const v= 1;
// deep copy
const c3 = v;
console.log(c3 === v);
// shallow copy
const s = {x:1};
const c2 = s;
console.log(c2 === s);

// 참조에 의한 전달 : 두 개의 식별자가 하나의 객체를 공유
let person2 = {name: 'Lee'};
let copy2 = person2; // 얕은 복사(참조 값을 복사)
console.log(person2 === copy2);
copy2.name = 'TTT';
person2.address = 'Seoul';
console.log(person2);
console.log(copy2);