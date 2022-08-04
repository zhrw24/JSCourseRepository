"use strict";



// function start() {
//     while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
//         numberOfFilms = prompt("How many films did you watch?", '');
//     }
// }

// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++){
//         let nameOfFilm = prompt('Введите название фильма', '');
//         let filmRating = +prompt('Дайте оценку фильму', '');  
//         if(nameOfFilm.length > 50 || nameOfFilm == '' || filmRating < 0 || filmRating > 10 || isNaN(filmRating)){
//             i--;
//             alert('Error');
//         }else{
//             personalMovieDB.movies[nameOfFilm] = filmRating;
//             alert('done');
//         }
//     }
// }

// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10){
//         alert("Вы смотрели довольно мало фильмов");
//     }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         alert("Вы - среднестатистический зритель");
//     }else if(personalMovieDB.count >= 30){
//         alert("Вы - киноман");
//     }else{
//         alert('Error');
//     }
// }




let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        while(this.count == null || this.count == '' || isNaN(this.count)){
            let numberOfFilms = prompt("How many films did you watch?", '');
            this.count = numberOfFilms;
        }
    },

    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            let nameOfFilm = prompt('Введите название фильма', '');
            let filmRating = +prompt('Дайте оценку фильму', '');  
            if(nameOfFilm.length > 50 || nameOfFilm == '' || filmRating < 0 || filmRating > 10 || isNaN(filmRating)){
                i--;
                alert('Error');
            }else{
                this.movies[nameOfFilm] = filmRating;
                alert('done');
            }
        }
    },
    
    detectPersonalLevel: function() {
        if(this.count < 10){
            alert("Вы смотрели довольно мало фильмов");
        }else if(this.count >= 10 && this.count < 30){
            alert("Вы - среднестатистический зритель");
        }else if(this.count >= 30){
            alert("Вы - киноман");
        }else{
            alert('Error');
        }
    },

    showMyDB: function() {
        if(this.private == false) {
            console.log(this);
        }else {
            console.log('Failed!This DB is private!');
        }
    },

    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            this.genres[i] = prompt(`Your favorite genre #${ i + 1 }`, ``);
        }
    }
};

// function showMyDB() {
//     if(personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//     }else {
//         console.log('Failed!This DB is private!');
//     }
// }

// function writeYourGenres() {
//     for(let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Your favorite genre #${ i + 1 }`, ``);
//     }
// }

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();