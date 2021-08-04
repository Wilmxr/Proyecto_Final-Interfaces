//General variables
const key = 'api_key=f56f32925433bb1f663613c6a6495943';
const url = 'https://api.themoviedb.org/3';
const img = 'https://image.tmdb.org/t/p/w500';

//request for upcoming movies
const req_upcoming = url + '/movie/upcoming?&' + key;

const main = document.getElementById('latest-movies');
const popup = document.getElementById('wrapper-latest');

function getLatestMovies(url) {
    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showLatestMovies(data.results);
    });
}

getLatestMovies(req_upcoming);

function showLatestMovies(data){

    main.innerHTML = '';

    data.forEach(movies => {

        const {id, title, poster_path, overview} = movies;
        const movie = document.createElement('div');
        const info = document.createElement('div');

        //Creates a movie card
        movie.classList.add('movie-card');
        movie.innerHTML = `
        <h2 class="name">${title}</h2>
        <a class="popup-btn">Ver más</a>
        <img src="${img + poster_path}" alt="" class="movie-img">
        `;

        main.appendChild(movie); //Add new movie to the section latest-movies.

        //Creates popup for the movie card
        info.classList.add('popup-view');
        info.innerHTML= `
        <div class="popup-card">
            <a><i class="fas fa-times close-btn"></i></a>
            <div class="movie-img">
                <img src="${img + poster_path}" alt="">
            </div>
            <div class="info">
                <h2>${title}</h2>
                <p>${overview}</p>
            </div>
        </div>
        `;

        popup.appendChild(info); //Add the modal of the before movie.
    });

    //Modal Views
    var popupViews = document.querySelectorAll('.popup-view');
    var popupBtns = document.querySelectorAll('.popup-btn');
    var closeBtns = document.querySelectorAll('.close-btn');
    
    var release = function(popupClick){
        popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
        popupBtn.addEventListener("click", () =>{
            release(i);
        });
    });

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            popupViews.forEach((popupView) => {
                popupView.classList.remove('active');
            });
        });
    });

    //Implements Carousel
    $(".latest-movies").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        dots: true,
        lazyLoad: true, //For images
        responsive: {
            0: {
                items: 1
            },
            670: {
                items: 2
            },
            970: {
                items: 3
            },
            1270: {
                items: 4
            },
            1570: {
                items: 5
            },
            1870: {
                items: 6
            },
            2170:{
                items: 7
            },
        }
    });
}