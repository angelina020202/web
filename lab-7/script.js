//ввывод любого значения 
console.log("hello world")
//вывод двух переменных
var a =8;
var b =4;
console.log('a = '+ a,'b = '+ b)
//ввод суммы переменных
var c = a + b;
console.log('a + b = '+ c)
//преобразования в верхний регистр
var str = "hello"
var upper = str.toUpperCase()
console.log('upper - ' + upper)
//преобразования в нижний регистр
var str2 = "QWERTY"
var lower = str2.toLowerCase()
console.log('lower -' + lower)
//Базовые операции над числами
var q, w, e;
q = a * b;
w = a / b;
e = a - b;
console.log('a * b = '+ q,';','a / b = '+ w,';','a - b = '+ e)
//возведение числа в квадрат
var pow = Math.pow(a,2);
console.log('pow = '+ pow)
//получение остатка от деления
console.log('b % a = ' + b % a)
//придуманные задания
//1. Вывод  текущие день, месяц и год 
console.log("Задание_1");
var date = new Date();
console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
//2. Шахматная доска
console.log("Задание_2");
const gridSize = 4;
for (let y = 0; y<gridSize; y++) {
  let line = '';
  for (let x=0; x<gridSize; x++) {
    line += ((x+y)%2) ? ' ' : '#';
  }
  console.log(line);
}
