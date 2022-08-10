/* Задания на урок:

done 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

done 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

done 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

done 5) Фильмы должны быть отсортированы по алфавиту */
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '') {
                if (a.length > 21) {
                    a = a.substr(0, 21).toUpperCase() + '...';
                } else {
                    a = a.toUpperCase();
                }
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
        console.log(personalMovieDB.movies);
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


const btn = document.querySelector('.button'),
    resBtn = document.querySelector('.resButton');

btn.style.background = '#D9F2B4';
resBtn.style.background = 'pink';

const list = document.querySelector('.list'),
    inputMovie = document.querySelector('input'),
    chbx = document.querySelector('#like'),
    fav = [];

btn.onclick = function () {
    let i = Object.values(personalMovieDB.movies).length;


    if (inputMovie.value) {
        personalMovieDB.movies[i + 1] = inputMovie.value;

        const obj = personalMovieDB.movies;


        const obj2 = {};

        let h = Object.values(obj).length;
        let p = Object.values(obj).length;


        for (let a = 0; a < h; a++) {
            obj2[a] = Object.entries(obj)[a][1];

        }

        // console.log('obj', obj);

        // console.log('obj2', obj2);

        Object.assign(obj, obj2);
        // console.log('obj + obj2', obj);

        // console.log(`length: ${h}`);
        h = Object.values(obj).length - 1;
        // console.log(`length-1: ${h}`);

        for (h; h >= p; h--) {
            // console.log('to delete:', obj[Object.entries(obj)[h][0]]);
            delete obj[Object.entries(obj)[h][0]];
        }
        // console.log('final obj:', obj);

        let result = '',
            arrMovies = [];

        for (let j = 0; j < Object.values(personalMovieDB.movies).length; j++) {
            arrMovies[j] = personalMovieDB.movies[j].toUpperCase();
            if (chbx.checked) {
                fav[0] = inputMovie.value.toUpperCase();
                console.clear();
                console.log(`You last favourite movie was: ${fav[0]}`);
            }


        }
        arrMovies.sort();
        // console.log(arrMovies);
        for (let key in obj) {
            obj[key] = arrMovies[key];
        }

        // console.log(obj);

        let f = '';
        arrMovies.forEach(function (item, i) {
            if (item.length > 21) {

                if (arrMovies[i] === fav[0]) {
                    result += `<div class='res'>${[i + 1]}. ${[item.substr(0, 21)]}... - favourite 
                    <div class = 'del'> </div></div>`;
                    f = `${[i + 1]}. ${[item.substr(0, 21)]}... - favourite`;
                } else {
                    result += `<div class='res'>${[i + 1]}. ${[item.substr(0, 21)]}... <div class = 
                    'del'> </div></div>`;
                }

            } else {
                if (arrMovies[i] === fav[0]) {
                    result += `<div class='res'>${[i + 1]}. ${[item]} - favourite<div class = 'del'> </div></div>`;
                    f = `${[i + 1]}. ${[item]} - favourite`;
                } else {
                    result += `<div class='res'>${[i + 1]}. ${[item]} <div class = 'del'> </div></div>`;
                }
            }
        });

        list.innerHTML = `<h4>Your list of movies:</h4><h5>${result}</h5>`;
        const del = document.querySelectorAll('.del');

        del.forEach(del => {
            del.addEventListener('click', (event) => {
                let n = event.target.parentNode.innerText;
                event.target.parentNode.remove();

                for (let z = 0; z < Object.values(personalMovieDB.movies).length; z++) {
                    let k = ((z + 1) + '. ' + personalMovieDB.movies[z] + ' ');

                    if (k === n || n === (k + '- favourite')) {

                        delete personalMovieDB.movies[z];
                    }
                }


            });
        });

        inputMovie.value = '';
        chbx.checked = false;
    } else {
        alert('Please type a movie name first');
    }
};

resBtn.onclick = function () {
    location.reload();
};