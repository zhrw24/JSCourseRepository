"use strict";

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
            if(this.genres[i] == "" || this.genres[i] == null) {
                i--;
                alert('Error');
            }else {
                alert('Done');
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${ i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if(this.private === false) {
            this.private = true;
        }else {
            this.private = false;
        }
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();