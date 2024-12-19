let moviesData = [];
let currentPage = 1;
let genre = 'Action';
const moviesPerPage = 9;

async function getMoviesByCategory(genre) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${genre}&page=${currentPage}&apikey=417ea838`);
        const data = await response.json();

        if (data.Response === "True") {
            const newMovies = data.Search;
            moviesData = [...moviesData, ...newMovies].slice(0, currentPage * moviesPerPage);
            currentPage++;
            displayMovies(moviesData);
        } else {
            displayNoMoviesMessage();
        }
    } catch (error) {
        console.log(`${error.message}`);
        displayNoMoviesMessage();
    }
}

function displayMovies(movies) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    if (movies.length === 0) {
        displayNoMoviesMessage();
    } else {
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            const movieImage = document.createElement('img');
            movieImage.src = movie.Poster;
            movieImage.alt = movie.Title;

            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.Title;

            const bookButton = document.createElement('button');
            bookButton.textContent = 'Book Now';
            bookButton.id = `book-${movie.imdbID}`;

            movieDiv.appendChild(movieImage);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(bookButton);

            contentDiv.appendChild(movieDiv);
        });
    }

    const loadMoreButton = document.getElementById('loadmorebutton');
    if (!loadMoreButton && movies.length >= currentPage * moviesPerPage) {
        const newLoadMoreButton = document.createElement('button');
        newLoadMoreButton.id = 'loadmorebutton';
        newLoadMoreButton.textContent = 'Load More Movies';
        newLoadMoreButton.addEventListener('click', loadMoreMovies());
        contentDiv.appendChild(newLoadMoreButton);
    }
}

function displayNoMoviesMessage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = 'No movies found for this genre.';
}

function loadMoreMovies() {
    getMoviesByCategory(genre);
}

function updateFilters(event) {
    const selectedButton = event.target;
    const filterType = selectedButton.dataset.filterType;
    const filterValue = selectedButton.textContent;

    if (filterType === 'genre') {
        genre = filterValue;
    }

    moviesData = [];
    currentPage = 1;
    getMoviesByCategory(genre);
}

document.querySelectorAll('.genre-btn').forEach(button => {
    button.addEventListener('click', updateFilters);
});

getMoviesByCategory(genre);
