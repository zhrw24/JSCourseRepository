"use strict";

let numberOfFilms;

function start() {
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = prompt("How many films did you watch?", '');
    }
}

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        let nameOfFilm = prompt('Введите название фильма', '');
        let filmRating = +prompt('Дайте оценку фильму', '');  
        if(nameOfFilm.length > 50 || nameOfFilm == '' || filmRating < 0 || filmRating > 10 || isNaN(filmRating)){
            i--;
            alert('Error');
        }else{
            alert('done');
        }
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert("Вы смотрели довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы - среднестатистический зритель");
    }else if(personalMovieDB.count >= 30){
        alert("Вы - киноман");
    }else{
        alert('Error');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

detectPersonalLevel();

rememberMyFilms();

console.log(personalMovieDB);