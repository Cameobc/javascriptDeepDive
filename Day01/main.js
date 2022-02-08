// Object.is : ES6 도입
// 정확한 비교 결과를 반환. 그 외에는 일치 비교 연산자(===)와 동일하게 동작
console.log(-0 ===+0);
console.log(Object.is(-0, 0));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// 지수 연산자 ** ES7 도입
// 이항 연산자 중 우선순위가 가장 높다
// 2**5 -> 2의 5제곱
// 지수 연산자 도입 이전에는 Math.pow() 사용
console.log(2**5 === Math.pow(2, 5));
// 음수를 거듭제곱근으로 사용하려면 괄호로 묶어야 한다.
//console.log(-5 **2); SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence
console.log((-5) **2);

// 그 외의 연산자
// ?. : 옵셔널 체이닝 연산자
// ?? : null 병합 연산자
// delete : 프로퍼티 삭제
let deleteTest = { a: 1};
delete deleteTest.a;
console.log(deleteTest);

// new : 생성자 함수를 호출할 때 사용하여 인스턴스를 생성
// instanceof : 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별
// in : 프로퍼티 존재 확인

// 블록문 : 함수선언문
function sum(a, b){
    return a+b;
}

// 레이블 문(label statement) : 식별자가 붙은 문을 의미
foo: console.log('foo'); 

//
foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done');

// 중첩 for 문 외부로 탈출할 때는 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.
outer: for(let i = 0; i<3; i++){
    for(let j=0; j<3; j++){
        if( i +j ===3){
            break outer;
            console.log(`inner [${i}, ${j}]`);
        }
    }
}

//
let string = 'Hello World';
let search = 'l';
let index;
for(let i =0; i< string.length; i++){
    if(string[i] === search){
        index = i;
        break;
    }
}

console.log(index);