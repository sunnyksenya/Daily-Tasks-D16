var a = document.createElement('div');//создаем игровое поле
a.className = 'grid';//даем игровому полю название для дальнейшей обработки в ЦСС
document.querySelector('body').appendChild(a);//добавляем игровое поле в ХТМЛ

var m =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];//создаем массив
function compareRandom () {//запускаем функцию с алгоритмом генерации случайных чисел
  return Math.random() - 0.5;//прописываем алгоритм
}
m.sort(compareRandom);//сортируем массив в случайном порядке
// console.log(m);//выводим на консоль

for (var i=0; i<m.length; i++) {//запускаем цикл для создания 16 ячеек
  createSubblock();//запускаем функцию создания 16 ячеек
}
function createSubblock () {
  var b = document.createElement('div');//создаем 16 ячеек
  b.className = 'cell';//даем ячейкам название для дальнейшей обработки в ЦСС
  b.innerHTML = m[i];//передаем каждой ячейке значение отсортированного массива
  document.querySelector('.grid').appendChild(b);//добавляем ячейки в ХТМЛ
}
var count = 0;
var arr = [];
document.addEventListener('click', f1);
function f1 (event) {
  if (event.srcElement.className == 'cell') {

    count++;
    if (count <= 2) {
      arr.push(event.target);
      var x = arr[0];
      var y = arr[1];
      console.log(count);
      console.log(arr);
      console.log(x,y);
    } else {
      count = 1;
      arr = [];
      arr.push(event.target);
      console.log(count);
      console.log(arr);
    }
    if (arr.length == 2) {
      if(arr[0].innerHTML == arr[1].innerHTML) {
        console.log('true');
        document.querySelector('.grid').removeChild(x);
        document.querySelector('.grid').removeChild(y);
      }
    }
  }
}
