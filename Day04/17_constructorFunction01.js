// 생성자 함수에 의한 객체 생성

// 01. Object 생성자 함수
// new Object();
// 생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 의미
// 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
const person = new Object();
//프로퍼티 추가
person.name = 'name';
person.sayHello = function(){
    console.log(`Hi! my name is ${this.name}!`);
};
console.log(person);
person.sayHello();

//Function
const func = new Function('x', 'return x * x');
console.log(typeof func);
console.dir(func);

// RegExp(정규표현식) 객체
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// 02. 생성자 함수
// 객체 리터럴에 의한 객체 생성 방식의 문제점
// : 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 비효율적임
const circle1 = {
    radius: 5,
    getDiameter(){
        return 2*this.radius;
    }
};
console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter(){
        return 2* this.radius;
    }
}
console.log(circle2.getDiameter());

// - 생성자 함수에 의한 객체 생성 방식의 장점
// : 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있음
//생성자 함수
function Circle(radius){
    //생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

//인스턴스 생성
const circle3 = new Circle(3);
const circle4 = new Circle(5);
console.log(circle3);
console.log(circle4);

// new 연산자와 함께 사용하지 않으면 일반 함수로 동작한다.
const circle5 = Circle(3);
console.log(circle5);
console.log(radius);
