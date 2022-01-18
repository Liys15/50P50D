const API_URL = 'https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn';
const SEARCH_API = 'https://api.wmdb.tv/api/v1/movie/search?q=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        console.log(movie)
        const title = movie.data[0].name
        const poster_path = movie.data[0].poster
        const vote_average = movie.doubanRating
        const overview = movie.data[0].description

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${poster_path}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>${overview}<h3>
            </div>
        `

        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})