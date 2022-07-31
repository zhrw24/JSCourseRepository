"use strict";

const numberOfFilms = prompt("How many films did you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++){
    const nameOfFilm = prompt('Введите название фильма', ''),
          filmRating = +prompt('Дайте оценку фильму','');

    personalMovieDB.movies[nameOfFilm] = filmRating;
} 

console.log(personalMovieDB);