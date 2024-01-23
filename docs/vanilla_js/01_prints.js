let Name = "DeokJaeKim";
// undefined
console.log(Name);
// VM243:1 DeokJaeKim
// undefined
let welcome = 'Hello World!';
// undefined
welcome;
// 'Hello World!'
let numbers = 55;
// undefined
numbers;
// 55
let concat = 'String:'+welcome+',Number:'+numbers;
// undefined
concat;
// 'String:Hello World!,Number:55'
alert(concat);
// undefined
`String : ${welcome}, Number : ${numbers}`;
// 'String : Hello World!, Number : 55'
let concat_tilt = `String : ${welcome}, Number : ${numbers}`;
// undefined
concat_tilt;
// 'String : Hello World!, Number : 55'
console.log(concat_tilt);
// VM1442:1 String : Hello World!, Number : 55