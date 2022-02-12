// 내부메서드 [[Call]] 과 [[Construct]]
// 함수는 객체
function foo(){};
// 함수는 객체이므로 프로퍼티를 소유할 수 있음
foo.prop = 10;
// 함수는 객체이므로 메서드를 소유할 수 있음
foo.method = function(){
    console.log(this.prop);
};
foo.method();

// 모든 함수는 내부 메서드 [[Call]] 을 갖고 있는 callable 이지만
// 모든 함수가 [[Construct]] 를 갖는 것은 아니다.
// constructor : 함수 선언문, 함수 표현식, 클래스
// non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수
// => 즉, 함수 정의 방식에 따라 constructor 와 non-constructor 를 구분
//일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {};
const bar = function (){};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수.
// 이는 메서드로 인정하지 않는다.
const baz = {
    x : function(){}
};

// 일반 함수로 정의된 함수만이 constructor 이다.
console.log(new foo());
console.log(new bar());
console.log(new baz.x());

//화살표 함수 정의
const arrow = () => {};
//console.log(new arrow()); Uncaught TypeError: arrow is not a constructor

//메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x(){}
};
//new obj.x(); Uncaught TypeError: obj.x is not a constructor


// 일반 함수로 호출
// [[Call]] 이 호출된다. 모든 함수에 구현되어있다.
foo();
// 생성자 함수로 호출
// [[Constructor]] 이 호출된다. 이때, [[Constructor]] 를 갖지 않으면 에러 발생
new foo();

// 04. new.target
// - 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서 지원
// - 함수 내부에서 new.target 를 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인 가능
// - new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target 는 함수 자신을 가리킴
// - new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target 은 undefined 이다.

//생성자 함수
function Circle(radius){
    //이 함수가 new 연산자와 함께 호출되지 않았다면,
    // new.target은 undefined
    if(!new.target){
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환함
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

// new 연산자 없이생성자 함수를 호출하여도 new.target 을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());

//스코프 세이프 생성자 패턴(scope-safe-constructor)
//new.target 는 최신 문법으로 IE 에서는 지원 xx
//new.target 를 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴 사용 가능
// Scope-Safe Constructor Pattern
function Circle2(radius){
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this에 바인딩. 이때 this와 Circle2는 프로토타입에 의해 연결된다.

    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window 를 가리킨다.
    // 즉, this 와 Circle2 는 프로토타입에 의해 연결되지 않는다.
    if(!(this instanceof Circle2)){
        // new 연산자와 함께 호출하여 생성된 인스턴스를 반환
        return new Circle2(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle3 = Circle2(5);
console.log(circle3.getDiameter());

// cf
//  - 대부분의 빌트인 생성자 함수는 new 연산자와 함께 호출되었는지를 확인 후 적절한 값을 반환
// ex ) Object & Function 생성자 함수는 new 연산이 없어도 new 연산과 함께 호출했을 때와 동일하게 동작한다.
// - 하지만 String, Number, Boolean 생성자 함수는 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환하며
// 이를 통해 데이터 타입을 변환하기도 한다.