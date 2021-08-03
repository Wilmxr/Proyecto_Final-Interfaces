
const key = 'api_key=f56f32925433bb1f663613c6a6495943';
const url = 'https://api.themoviedb.org/3';
const img = 'https://image.tmdb.org/t/p/w500';

const req_popular = url + '/movie/popular?&' + key;

const main = document.getElementById('autoWidth');

function getPopularMovies(url) {
    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showPopularMovies(data.results);
    });
}

getPopularMovies(req_popular);

async function showPopularMovies(data){

    main.innerHTML = '';

    data.forEach(movies => {

        const {title, poster_path, overview} = movies;
        const movie = document.createElement('li');

        movie.classList.add('item');
        movie.innerHTML = `
        <div class="card">
            <div class="card-img">
                <img src="${img + poster_path}" alt="">
            </div>

            <div class="card-text flexible">
                <strong>${title}</strong>
            </div>

            <button>Ver más</button>
        </div>
        `;

        main.appendChild(movie);
    });
}


