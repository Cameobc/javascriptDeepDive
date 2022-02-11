// 함수
// - 일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것
// 함수 선언문(function definition) (함수 리터럴)
// - 이름 생략 불가능, 표현식이 아닌 문이다.
function add(x, y){
    return x + y;
}

// JS 엔진은 문맥에 따라 피연산자로 사용될 경우 {} 를 객체 리터럴도 해석한다.
// cf)
// 선언문
// : JS 엔진은 함수를 호출하기 위해 암묵적으로 함수와 동일한 이름의 식별자를 생성하고, 객체를 할당함
function foo (){console.log('foo')};
// 표현식 
// : 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어야 하기  때문임.
(function bar(){console.log('bar');});
//bar();Uncaught ReferenceError: bar is not defined

// 함수 표현식
let add1 = function(x, y){
    return x + y;
}


// 함수 생성 시점과 함수 호이스팅
// - 함수 참조
console.dir(sum);
console.dir(sub);
// - 함수 호출
console.log(sum(2,5));
// console.log(sub(7,1));  Uncaught TypeError: sub is not a function

//함수 선언문 : 함수 호이스팅 -> 이러한 특성때문에 함수 선언문이 아닌 표현식을 사용할 것을
function sum(x, y){
    return x+y;
}

//함수 표현식 : 변수 호이스팅
var sub = function(x,y){
    return x-y;
}

// Function 생성자 함수 : new 없이 선언해도 결과가 동일함
// - 권하지 않는 방법
// - clsure 생성하지 않는 등 함수 선언문/표현식으로 생성한 함수와 다르게 동작함
let add2 = new Function('x', 'y', 'return x+y');
var addFunction = (function (){
    var a = 10;
    return function (x,y){
        return x+y+a;
    };
}());
console.log('addFunction =>', addFunction(2,3));
var addFunction2 = (function (){
    var a = 10;
    return new Function('x', 'y', 'return x+y+a;');
}());
//console.log('addFunction2 =>', addFunction2(2,3)); a is not defined

// arrow function
// 항상 익명함수로 정의함
let add3 = (x,y) => x+y;

// 함수 호출(function call/invoke)
var result = add(2,5);
console.log(result);

// 함수를 사용하는 이유
// - 코드의 재사용이라는 측면에서 유용

// 매개변수보다 인수를 더 많이 할당한 경우 arguments 로 보과된다.
function parameter(x, y){
    console.log('parameter', arguments);
    return x+y;
}
parameter(2,5,6);

//즉시 실행 함수 (immediatelyInvokedFunctionExpression)
// - 함수 정의와 동시에 즉시 호출되며 단 한 번만 호출된다.
// - 반드시 그룹연산자() 로 감싸야 한다.
var res = (function (){
    var a = 3;
    var b = 5;
    return a*b;
}());

console.log(res);
res = (function (a, b){
    return a*b;
}(5,5));
console.log(res);
(function immediatelyInvokedFunctionExpression(){
    var a = 5;
    var b = 7;
    return a *b;
}());

// 재귀 호출 함수(Recursive call)
function countDown(n){
    if(n >= 0){
        console.log(n);
        countDown(n-1);
    }
}

countDown(10);