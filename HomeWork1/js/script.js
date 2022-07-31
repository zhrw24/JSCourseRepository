"use strict";

const numberOfFilms = prompt("How many films did you watch?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

