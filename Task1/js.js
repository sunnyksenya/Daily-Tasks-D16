// Задание 1
// Дано массив
// var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// Выведите те элементы массива, которые меньше 35
// Выведите те элементы массива, которые больше 35

var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// console.log(a);
for (var i=0; i<a.length; i++) {
  if (a[i]<35) {
    document.getElementById('out').innerHTML += a[i] + ' ';
  }
}
var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// console.log(a);
for (var i=0; i<a.length; i++) {
  if (a[i]>35) {
  document.getElementById('out1').innerHTML += a[i];
  }
}

// Задание 2.
// Дан массив
// var b = {
// 	{"name" : "Alex", "age": 17},
// 	{"name" : "Ivan", "age": 27},
// 	{"name" : "Sergey", "age": 28},
// 	{"name" : "Vitaliy", "age": 30},
// 	{"name" : "Olga", "age": 24},
// }
// Создайте input, куда пользователь может ввести возраст человека. При нажатии кнопки показываются имена тех людей, чей возраст равен или меньше указанного.

var b = {
	1: {"name" : "Alex", "age": 17},
	2: {"name" : "Ivan", "age": 27},
	3: {"name" : "Sergey", "age": 28},
	4: {"name" : "Vitaliy", "age": 30},
	5: {"name" : "Olga", "age": 24},
}
// console.log(b);
var but = document.querySelector('button');
but.onclick = function() {
  var input = document.querySelector('#input').value;
  // console.log(input);
  for (var key in b) {
    if (b[key].age>input) {
      // console.log(b[key].age);
      document.getElementById('result').innerHTML += b[key].name + ' ';
    }
  }
}
