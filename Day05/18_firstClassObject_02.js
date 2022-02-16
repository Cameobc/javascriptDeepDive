// 함수 객체의 프로퍼티
// 함수는 객체로 프로퍼티를 가질 수 있음
function square(number){
    return number * number;
}

console.dir(square);
console.log(Object.getOwnPropertyDescriptors(square));
//__proto__ 는 square 함수의 프로퍼티가 아니다.
//console.log(Object.getWonPropertyDescriptor(squqre, '__proto__')); // undefined
//__proto__ 는 Object.prototype 객체의 접근자 프로퍼티이다.
//square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: f, set: f, enumerable: false, configurable: true}