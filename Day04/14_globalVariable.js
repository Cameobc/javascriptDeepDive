// 01. 변수의 생명주기
// 1-1 지역 변수의 생명 주기
// : 자신이 선언된 위치에서 생성되고 소멸된다.
// : 따라서 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다.
function foo(){
    var x = 'local';
    console.log(x);
    return x;
}

foo();
// console.log(x); Uncaught ReferenceError: x is not defined

var x = 'global';
function foo2(){
    console.log(x);
    var x = 'local';
}
foo2();
console.log(x);

// 전역 객체(GLobal Object)
// : 코드가 실행되기 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
// : 클라이언트 사이드 환경에서는 window, 서버 사이드 환경에서는 global 객체를 의미
// : ES11 에서 globalThis 로 통일되었음

// 전역 변수의 문제점
// - 암묵적 결함(implicit coupling) : 모든 코드가 전역 변수를 참조하고 변경할 수 있음
// - 긴 샘옂 주기 : 메모리 리소스를 오랜 기간 소비. 상태 변경에 의한 오류 확률 up
// - 스코프 체인 상에서 종점이 존재 : 전역 변수의 검색 소리가 가장 느림
// - 네임 스페이스 오염 : jS는 파일이 분리되어 있어서 하나의 전역 스코를 공유. 따라서 동일한 이름의 전역 변수||전역 함수 존재 시 예상치 못한 겨로가가 발생할 수 있음

// 2.전역 변수의 사용을 억제하는 방법
// - 반드시 사용해야 할 이유를 찾지 못하는 경우 지역 변수 사용
// - 변수의 스코프는 좁을수록 좋다.

//2-1. 즉시 실행 함수(라이브러리 등에 자주 사용된다.)
// : 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function (){
    var foo = 10;
}());
//console.log(foo); // ReferenceError : foo is not defined

//2-2. 네임스페이스 객체
// : 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가
var MYAPP= {};
MYAPP.name = 'Lee';
console.log(MYAPP.name);
// 또 다른 네임스페이스 객체를 프로퍼티로 추가하여 네임스페이스를 계층적으로 구성할 수 있음
// -> 식별자 충돌 방지 효과는 있으나 결국 네임스페이스 객체 자체가 전역변수로 설정이 된다.
MYAPP.person = {
    name:'NN',
    age:10
};
console.log(MYAPP.person);

//2-3. 모듈 패턴
// : 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
// JS의 강력한 기능인 클로저를 기반으로 동작
// 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있음
// 캡슐화(encapsulation) : 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고, 조작할 수 있는 동작인 메서드를 하나로 묶는 것
// : 특정 프로퍼티나 메서드를 감출 목적으로도 사용(정보은닉(information hiding))
var Counter = (function (){
    //private 변수
    var num = 0;
    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
    return{
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    };
}());

console.log(Counter.num); // 외부로 노출되지 않으며 이는 클로저에서 자세히 알아보자
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());

//2-4. ES6 모듈
// ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공함
// 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아님
// 모던 브라우저에서 사용할 수 있으며 script 태그에 type="module"  추가. 파일 확장자는 .mjs 권장
// 브라우저가 지원한는 ES6 모듈 보다는 Webpack 등의 모듈 번들러를 도입하는 게 일반적
