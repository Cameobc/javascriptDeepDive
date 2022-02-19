// arguments 프로퍼티
// 함수 객체에서의 arguments 프로퍼티 값은 arguments 객체이다.
// 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한(iterable) 유사 배열 객체이며
// 함수 내부에서 지역 변수처럼 사용된다.
// 모든 인수는 arguemnts 객체의 프로퍼티로 보관된다.
// 프로퍼티 키는 인수의 순서를 나타내며, callee 프로퍼티는 호출되어 arguments 객체를 생성한 함수 즉, 자기 자신을 가리키고
// arguments 객체의 length 프로퍼티는 인수의 개수를 가리킨다.
function multiply(x, y){
    console.log(arguments);
    return x+ y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(3, 4));
console.log(multiply(1, 2, 4));

// arguments 객체의 Symbol(Symbol.iterator) 프로퍼티는 arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티로
// Symbol.iterator 를 프로퍼티 키로 사용한 메서드를 구현하는 것에 의해 이터러블이 된다.
// ex
function multiply2(x, y){
    //이터레이터
    const iterator = arguments[Symbol.iterator]();

    //이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments 를 순회
    console.log(iterator.next());   // {value: 1, done: false}
    console.log(iterator.next());   // {value: 2, done: false}
    console.log(iterator.next());   // {value: 3, done: false}
    console.log(iterator.next());   // {value: undefined, done: true}

    return x+y;
}

multiply2(1, 2, 3);