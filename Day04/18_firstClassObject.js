
// 일급 객체
// - 1. 무명의 리터럴로 생성할 수 있어야 함.(런타임에 생성 가능)
// - 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// - 3. 함수의 매개변수에 전달할 수 있다.
// - 4. 함수의 반환값으로 사용할 수 있다.

// JS 의 함수
// - 무명의 리터럴로 생성 가능, 변수에 저장할 수 있음
// - 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고, 변수에 할당된다.
const increase = function (num){
    console.log('$$$$$$$$$', num);
    return ++num;
};

const decrease = function (num){
    return --num;
};

// - 함수는 객체에 저장가능
const predicate = {increase, decrease};
// - 3. 함수는 매개변수에 전달 가능, 4. 함수의 반화값으로 사용 가능
function makeCounter(predicate){
    // 최초에만 여기를 탐 그 뒤로는 지역변수가 아님
    let num = 0;
    console.log('=====', num);
    console.log('preicate is ', predicate);
    return function(){
        console.log('#######', num);
        num = predicate(num);
        console.log('******',num);
        return num;
    };
}

// - 함수는 매개변수에게 함수를 전달할 수 있다.
/*console.log(increase());
console.log(predicate);
console.log(predicate.increase);
console.log(makeCounter);
console.log(makeCounter(increase));
console.log(makeCounter(predicate.increase));*/
//console.log('&&&&&&', num);
const increaser = makeCounter(predicate.increase);
console.log('first @@@@@@@', increaser);
console.log(increaser());
console.log('second @@@@@@', increaser);
console.log(increaser());
const decreaser = makeCounter(predicate.decrease);
console.log(decreaser());
console.log(decreaser());