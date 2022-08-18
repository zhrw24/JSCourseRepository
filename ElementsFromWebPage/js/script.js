'use strict';

//старые методы

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle');  
//наименование класса без точки впереди!
//новые методы

const hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
//только первый подходящий элемент

// box.style.backgroundColor = 'blue'; //работа с inline-стилями
// box.style.width = '250px';

box.style.cssText = 'background-color: blue; width: 250px'; //идентично двум строкам выше, только компактнее;

buttons[2].style.borderRadius = '20%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

//создаем элемент вручную, он существует пока только в js
const div = document.createElement('div');

div.classList.add('black'); //назначение класса black

wrapper.append(div); //добавили в конец body div в качестве потомка

//wrapper.prepend(div); //добавили в начало body div в качестве потомка

// hearts[0].before(div);
//hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]); //старый код

// circles[0].remove();

//hearts[1].replaceWith(circles[0]);

div.innerHTML = "<h4>Lorem Ipsum</h4>";