// 프로퍼티 정의
// : 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것
// Object.defineProperty 메서드를 사용하여 프로퍼티의 어트리뷰트를 재정의할 수 있음
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true,
});
// 누락한 경우 기본값은 false
Object.defineProperty(person, 'lastName', {
    value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log(descriptor);

// [[Enumerable]] : false 
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거 불가
console.log(Object.keys(person));

// [[Writable]] : false 
// 해당 프로퍼티의 value 값 변경 불가
// 값을 변경하면 에러가 발생하지 않고, 무시된다.
person.lastName = 'Park';
console.log(person);

// [[Configurable]] : false 
// 삭제불가, 재정의 불가
delete person.lastName;
console.log(person);

// [[Configurable]] : false 
console.log('lastName', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    //getter 함수
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName ', descriptor);

person.fullName = 'Heegun Kee';
console.log(person);