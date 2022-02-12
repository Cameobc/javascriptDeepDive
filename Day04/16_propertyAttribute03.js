// 객체 변경 방지
// 01. 객체 확장 금지(Object.preventExtensions)
// - 프로퍼티 추가(프로퍼티 동적 추가&&Object.defineProperty) 금지
// 확장 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인 가능
const person = { name:'person'};
console.log(Object.isExtensible(person));

Object.preventExtensions(person);
console.log(Object.isExtensible(person));

person.age = 20;
console.log(person);

//프로퍼티 추가는 금지되었지만 삭제는 가능함
delete person.name;
console.log(person);

//Object.defineProperty(person, 'age', {value:22});
//Uncaught TypeError: Cannot define property age, object is not extensible
console.log(person);

// 02. 객체 밀봉(Object.seal)
// - 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지
// 즉, 읽기 쓰기만 그낭
// Object.isSealed 로 확인 가능
const person2 = {name: 'lee'};
console.log(Object.isSealed(person2));
Object.seal(person2);
console.log(Object.isSealed(person2));
// 밀봉된 객체의 configurable 은 false
console.log(Object.getOwnPropertyDescriptors(person2));

// 프로퍼티 추가/삭제 금지
person2.age = 22;
delete person2.name;
console.log(person2);

//프로퍼티 값 갱신 가능
person2.name = 'testtt';
console.log(person2);

//프로퍼티 어트리뷰트 재정의 금지
//Object.defineProperty(person, 'name', {configurable: true});
//Cannot define property name, object is not extensible

// 03. 객체 동결(Object.freeze)
// - 프로퍼티 추가/삭제/값 갱신 금지 및 프로퍼티 어트리뷰트 재정의 금지
// - 읽기만 가능하다
// - Object.isFrozen 으로 확인 가능
const person3 = {
    name:'person3',
    address:{city: 'seoul'},
};
console.log(Object.isFrozen(person3));
Object.freeze(person3);
console.log(Object.isFrozen(person3));
//동결된 객체는 writable, configurable : false
console.log(Object.getOwnPropertyDescriptors(person3));
//프로퍼티 추가/삭제/갱신 금지
person3.age = 22;
delete person3.name;
person3.name = 'name';
console.log(person3);

//중첩 객체까지는 동결 못함
console.log(Object.isFrozen(person3.address));
person3.address.city = 'busan';
console.log(person3);

//프로퍼티 어트리뷰트 재정의 금지
//Object.defineProperty(person3, 'name', {writable:true});


// 04. 불변 객체
// - 현재까지 살펴본 변경 방지 메서드들은 얕은 변경 방지(shallow only) 로
// 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못함.
// 따라서 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기전용 불변 객체를 구현하려면 객체를 값으로 갖는
// 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야함
function deepFreeze(target){
    //객체가 아니거나 동결된 객체는 무시하고, 동결되지 않은 객체만 동결
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        /*
         모든 프로퍼티를 순회하며 재귀적으로 동결한다.
         Object.keys 메서드는 개체 자신의 열거 가능한 프로퍼티 키를 배열로 반환함
         forEach 메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행함.
        */
       Object.keys(target).forEach(e => deepFreeze(target[e]));
    }
    return target;
}

const targetPerson = {
    name : 'testPerson',
    address: {
        city: 'Seoul'
    },
};

deepFreeze(targetPerson);
console.log(Object.isFrozen(targetPerson));
console.log(Object.isFrozen(targetPerson.address));