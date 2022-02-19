// 01 객체 지향 프로그래밍
// JS 는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어
// 원시 타입을 제외하고 JS 를 이루고 있는 거의 모든 것이 '객체'이다.
// 속성(attribute/property) - 특질이나 성질을 나타냄. 이를 통해 실체를 인식하거나 구별
// 추상화(abstraction) - 다양한 속성 중 프로그램에 필요한 속성만 간추려 내어 표현

// ex: 이름과 주소 속성을 갖는 객체
const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(person);

// 객체 : 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조
// 객체지향 프로그래밍 : 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

const circle = {
    radius: 5,

    //원의 지름: 2r
    getDiameter(){
        return 2 * this.radius;
    },

    // 원의 둘레 : 2파이r
    getPerimeter(){
    return Math.PI * 2 * this.radius;
    },

    // 원의 넓이 : 파이rr
    getArea(){
        return Math.PI * this.radius ** 2;
    },
};

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
