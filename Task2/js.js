// var u = document.createElement('div');
// u.className = 'primer hello';
// u.href = 'http://ya.ru';
// u.innerHTML = 'Мой сгенерированный див';
// u.innerHTML = 'Моя гиперссылка';
// document.querySelector('.one').appendChild(u);
// document.querySelector('body').insertBefore(u, document.querySelector('.one'));
// u.innerHTML = 'хаха';
// var w = document.querySelector('.one').cloneNode(true);
// document.querySelector('body').appendChild(w);
// var z = document.querySelector('body').removeChild(document.querySelector('.one'));
// console.log(z);


document.addEventListener('mouseover', f1);
document.addEventListener('mouseout', f2);

function f1 (event) {
  if (event.target.className == 'art') { //event.target.className=event.srcElement.className
    var u = document.createElement('div');
    u.className = 'social';
    // console.log(u);
    event.target.appendChild(u);
  }

}
function f2 (event) {
  if (event.srcElement.className == 'art') {
    var z = event.target.removeChild(document.querySelector('.social'));
    // console.log(event.srcElement.className);
  }
}
