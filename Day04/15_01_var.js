// 01. var 키워드로 선언한 변수의 문제점
// - 변수의 중복 선언이 가능하다
var x = 1;
var y = 1;
var x = 100; // 초기화 문이 있는 경우 변수 값 변경
var  y; // 초기화 문이 없는 경우 무시
console.log(x);
console.log(y);

// - 함수의 코드 블록만을 지역 스코프를 인정하기 때문에, 함수 외부에서 선언한 변수는 모두 전역 변수가 된다.
var x = 1;
if(true){
    var x = 10;
}
console.log(x);
var i = 100;
for(var i =0; i<5; i++){
    console.log(i);
}

console.log(i);

// - 변수 호이스팅
console.log(foo);
foo = 123;
console.log(foo);
var foo;