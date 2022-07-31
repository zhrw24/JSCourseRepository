"use strict";

const numberOfFilms = prompt("How many films did you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const nameOfFilm = prompt("Name one film that you've seen recently", ''),
    filmRating = +prompt("Give the rating to this film", ''),
    nameOfFilm1 = prompt("Name one film that you've seen recently", ''),
    filmRating1 = +prompt("Give the rating to this film", '');


personalMovieDB.movies[nameOfFilm] = filmRating;
personalMovieDB.movies[nameOfFilm1] = filmRating1;

console.log(personalMovieDB);