/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма"  +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Одержимость",
        "Ла-ла лэнд"
    ]
};

const ads = document.querySelectorAll('.promo__adv img'),
      posterbg = document.querySelector('.promo__bg'),
      genre = posterbg.querySelector('.promo__genre'),
      filmList = document.querySelector('.promo__interactive-list');

ads.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

posterbg.style.backgroundImage = 'url(img/bg.jpg)';

filmList.innerHTML = '';

movieDB.movies.sort();

console.log(movieDB.movies);

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});