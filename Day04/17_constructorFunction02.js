// 03. 생성자 함수의 인스턴스 생성 과정
// - 생성자 함수의 역할은 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(프로퍼티 추가 및 고기값 할당) 하는 것
// - 인스턴스 생성은 필수, 초기화하는 것은 옵션
function Circle(radius){
    // 인스턴스 초기화
    //01. 암묵적으로 인스턴스가 생성되고, this 에 바인딩
    //02. this 에 바인딩되어 있는 인스턴스를 초기화
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
    //03. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
    // 만약 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시되나,
    // 원시 값을 명시적으로 반환하면 this  반환이 이루어진다.
}

//인스턴스 생성 Circle 생성자 함수는 암묵적으로 this 를 반환한다.
const circle1 = new Circle(5);

// 인스턴스를 생성하고 반환하는 코드가 없지만 JS 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
// 순서
// 01. 인스턴스 생성과 this 바인딩
//  - 암묵적으로 빈 객체가 생성되고 이 인스턴스가 this 에 바인딩된다.
//  - 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행된다.
//    cf) binding : 식별자와 값을 연결하는 과정
// 02. 인스턴스 초기화
//  - this 에 바인딩되어 있는 인스턴스를 초기화한다.
//  - 이 처리는 개발자가 기술한다.
// 03. 인스턴스 반환
//  - 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this 가 암묵적으로 반환