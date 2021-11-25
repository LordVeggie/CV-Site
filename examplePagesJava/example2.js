const page2 = document.querySelector('#example2');
const searchButton = document.querySelector('#movieSerchButton');
const searchbar = document.querySelector('#movieSearch');
const bodyMovieExample = document.querySelector('#bodyMovieExample');


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=29577581e2d0c737275f07154f6b4896&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const API_API = 'https://api.themoviedb.org/3/search/movie?api_key=29577581e2d0c737275f07154f6b4896&query="';


async function getMovies(url)
{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showMovies(data.results);
}

function showMovies(movies)
{
    bodyMovieExample.innerHTML = '';

    movies.forEach((movie) =>
    {
        const { title, poster_path, vote_average, overview } = movie;

        const MovieCotainer = document.createElement('div');
        MovieCotainer.classList.add('MovieCotainer');

        MovieCotainer.innerHTML = `
        <img src="${ IMG_PATH + poster_path }" alt="${ title }">
        <div class="movieInfo">
            <h3>${ title }</h3>
            <span class="${ styleRating(vote_average) }">${ vote_average }/10</span>
            <div class="movieDescription">
                <h3>Overview</h3>
                ${ overview }
            </div>
        </div>`;

        bodyMovieExample.appendChild(MovieCotainer);
    });
}

function styleRating(vote)
{
    if (vote >= 8)
    {
        return 'movieGood';
    }
    else if (vote >= 5)
    {
        return 'movieOkay';
    }
    else
    {
        return 'movieBad';
    }
}


searchButton.addEventListener('click', function ()
{
    const searchTerm = searchbar.value;

    if (searchTerm && searchTerm !== '');
    {
        getMovies(API_API + searchTerm);

        searchbar.value = '';
    }
});


getMovies(API_URL);