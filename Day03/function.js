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


function factorial(n){
    //탈추 조건
    if(n <=1){
        return 1;
    }
    //재귀호출
    return  n*factorial(n-1);
}

console.log(factorial(5));


// 중첩 함수(Nested Function) || 내부 함수(Inner Function)
// 중첩 함수를 포함하는 함수를 외부 함수(Outer Function) 라고 부르며, 
// 중첩 함수는 자기 자신을 포함하는 외부 함수를 돕는 헬퍼함수(Helper Function) 역할을 한다.
// 호이스팅으로 인해 혼란이 발생할 수 있으므로 if문이나 for 문 등의 코드 블록에서 함수 선언문을 통해 함수를 정의하는 것은 바람직하지 않다.
// 스코프& 클로저에 깊은 관련이 있다.
function outer(){
    var x = 1;
    //Nested Function
    function inner(){
        var y =2;
        //외부 함수의 변수 참조 가능
        console.log(x+y);
    }
    inner();
}

outer();


// 콜백함수
// -함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수이며,
// - 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수(Higher-Order Function)이라함
// - 고차 함수는 콜백 함수를 자신의 일부분으로 합성함
// - 콜백 함수는 고차 함수에 의해 호출되며, 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있음
function repeat(n){
    for(let i =0;i<n; i++){
        console.log(i);
    }
}
repeat(5);

function repeat2(n){
    for(let i =0; i<n; i++){
        if(i%2){
            console.log(i);
        }
    }
}
repeat2(5);

//위의 함수를 개선하기 위해 변치 않는 공통 로직을 미리 정의하고, 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달
function repeat3(n, f){
    for(let i =0; i<n;i++){
        f(i);
    }
}

let logAll = function(i){
    console.log(i);
};

repeat3(5, logAll);

console.log('구분선=========');
let logOdds = function(i){
    if(i%2){
        console.log(i);
    }
};
repeat3(5, logOdds);


console.log('구분선=========');
//콜백 함수가 고차 함수 내부에만 호출된다면 콜백 함수를 익명 함수 리터럴로 정의하며 곧바로 전달하는 것이 일반적
repeat3(5, function(i){
    if(i%2){
        console.log(i);
    }
});

//콜백 함수를 사용하는 고차 함수 map
var callRes = [1, 2, 3].map(function (item){
    return item * 2;
});

console.log(callRes);

//콜백 함수를 사용하는 고차 함수 filter
callRes = [1, 2, 3].filter(function (item){
    return item % 2;
});
console.log(callRes);

//콜백 함수를 사용하는 고차 함수 reduce
callRes = [1, 2, 3].reduce(function (acc, cur){
    console.log(`acc is ${acc}, cur is ${cur}`)
    return acc + cur;
}, 0);
console.log(callRes);
// -> 최종 합산값을 리턴해줌 그래서 6임. 3+3

// 순수 함수와 비순수 함수
// - 순수 함수 : 부수 효과가 없는 함수
// - 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 부수효과가 있는 함수

//pure function
let count = 0;
function increase(n){
    return ++n;
}
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

//impure function
let impureCount = 0;
function increase2(){
    return ++impureCount;
}
increase2();
console.log(impureCount);
increase2();
console.log(impureCount);