// Scope
// - 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정되는데 이를 스코프라고 한다.
// - 식별자의 유효 범위, JS 엔진이 식별자를 검색할 때 사용하는 규칙
let x = 'global';
function foo(){
    let x = 'local';
    console.log(x);
}
foo();
console.log(x);
// -> 다음처럼 JS 엔진이 이름이 가틍ㄴ 두 개의 변수 중에서 어떤 변수를 참조해야 할 지 결정하는 것을 식별자 결정(Identifier Resolution) 이라 함
// cf) 렉시컬 환경(Lexical Environment) : 코드가 어디서 실행되며 주변에 어떤 코드가 있는지
// - 즉, 코드의 문맥은 렉시컬 환경으로 이루어지며, 이를 구현한 것이 실행 컨텍스트이다.
// 모든 코드는 실행 컨텍스트에서 평가되고 실행된다.
// 스코프는 함수의 중첩에 의해 계층적 구조를 지니며 연결된다. : 스코프 체인
// 모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프이다.
// 변수를 참조할 때 JS 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색함
// 스코프 체인은 물리적인 실체로 존재하며, JS 엔진은 코드를 실행하기 앞서 렉시컬 환경을 실제로 생성함
// 변수 선언이 실행되면 변수 식별자가 이 자료구조(렉시컬 환경)에 키로 등록되고, 변수 할당이 일어나면 이 자료구조의 변수 식별자에 해당하는 값을 변경한다.
// 변수의 검색도 이 자료구조 상에서 이뤄진다.

// 스코프 체인에 의한 함수 검색
//전역 함수
function foo2(){
    console.log('this is global function foo');
}

function bar(){
    //중첩 함수
    function foo2(){
        console.log('this is local function foo');
    }

    foo2();
}

bar();


var y = 1;
if(true){
    // var 키워드로 선언된 변수는 함수의 코드블록만을 지역 스코프로 인정
    // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내라 해도 모두 전역 변수
    // 따라서 y 는 전역 변수
    var y = 10;
}

console.log(y);

var i = 10;
for(var i = 0; i<5; i++){
    console.log(i);
}

console.log(i);
