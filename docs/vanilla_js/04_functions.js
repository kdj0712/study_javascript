// function 기본 구문
function function_name(params){
    return 0;
}

// call function
function_name(5);

// ex

function function_name(params){
    return params;
}
// undefined
function_name(5);
// 5

// 일반 구조 적용 예시
function calculateSum(param_first,param_second){
    result = param_first + param_second;
    return result;
}
// undefined
result = calculateSum(3,5);
// 8

// arrow function 기본 구조

let arrow_function = (params) => {
    return 0
}

// arrow function Project 기간 사용할 기본 구조
(params) => {
    console.log();
}