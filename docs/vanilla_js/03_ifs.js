// if in Javascript : 기본 구문 형태(영역이 확실하면, 구문의 마무리에 세미콜론을 사용하지 않아도 된다.)
if (true) {
} else if (true){
} else {
}
let numbers = 10;
// undefined
if (numbers > 0) {
    console.log("숫자는 양수");
} else if (numbers < 0){
    console.log("숫자는 음수");
} else {
    console.log("0 입니다.");
}
// VM432:2 숫자는 양수

// 삼항 연산자(Ternary operation)
if (true) {
} else {
}
//  를 이렇게 구현
result = (true) ? 'as true' : "as false";

result = (numbers > 0) ? '양수' : "음수";
// '양수'

console.log(`숫자는 ${result}`);
// VM636:1 숫자는 양수