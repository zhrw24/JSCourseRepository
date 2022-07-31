"use strict";

const numberOfFilms = prompt("How many films did you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let nameOfFilm = '',
      filmRating = 0;

for(let i = 0; i < 2; i++){
    nameOfFilm = prompt('Введите название фильма', '');
    filmRating = +prompt('Дайте оценку фильму', '');  
    if(nameOfFilm.length > 50 || nameOfFilm == '' || filmRating < 0 || filmRating > 10){
        i--;
    }
}

console.log(personalMovieDB);