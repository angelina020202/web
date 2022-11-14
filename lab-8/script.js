//Калькулятор любви
let n1 = prompt('Введите свое имя');
let n2 = prompt('Введите его/ее имя');
res = (Math.floor(Math.random() * 100) + 1);
alert(`${n1} подходит к ${n2} на ${res} процентов!`);
//BMI калькулятор +++++
let ves = prompt('введите ваш вес');
let rost = prompt('Введите ваш рост в метрах');
var r2 = Math.pow(rost,2)
let BMI = ves / r2;
if (BMI <= 18.5){
    alert("Недостаточный вес")
} else if (BMI <= 25){
    alert("Нормально")
}else if (BMI <= 30){
    alert("У вас излишек веса")
} else if (BMI > 30){
    alert("Ожирение")
}
//Високосный год ++++++
let years = prompt('Введите год');
if (years % 400 == 0){
    alert('Високосный год')
  }
  else if (years % 4 == 0){
    alert('Високосный год')
  }
  else if(years % 100 != 0){
    alert('Не является високосным')
  }
//Ужин ++++
var names = [
    'Дима', 'Катя', 'Петр', 'Лена' ];
var rand = Math.floor(Math.random() * names.length);
alert(`Оплачивать будет ${names[rand]}`);
