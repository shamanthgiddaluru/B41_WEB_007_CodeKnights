
let moviesData = [];
let displayedMovies = 0;
let currentPage = 1;
let currentGenre = '';

async function getMovies(genre, page = 1) {
    try {
        const apiKey = '417ea838';
        const response = await fetch(`http://www.omdbapi.com/?s=${genre}&type=movie&page=${page}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'True') {
            moviesData = [...moviesData, ...data.Search];
            displayMovies();
        } else {
            document.getElementById('moviesBoxes').innerHTML = `<h3>${data.Error}</h3>`;
            document.getElementById('loadmorediv').style.display = 'none';
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

function displayMovies() {
    const moviesContainer = document.getElementById('moviesBoxes');
    const loadMoreDiv = document.getElementById('loadmorediv');
    const moviesToShow = moviesData.slice(displayedMovies, displayedMovies + 8);

    if (displayedMovies === 0) moviesContainer.innerHTML = '';

    moviesToShow.forEach(movie => {
        const movieBox = document.createElement('div');
        movieBox.className = 'movieBox';
        movieBox.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/180x270'}" alt="${movie.Title}">
            <h4>${movie.Title}</h4>
            <button onclick="redirectToMoviePage('${movie.imdbID}')">Book Now</button>
        `;
        moviesContainer.appendChild(movieBox);
    });

    displayedMovies += 8;
    loadMoreDiv.style.display = displayedMovies < moviesData.length ? 'block' : 'none';
}

function loadMoreMovies() {
    currentPage++;
    getMovies(currentGenre, currentPage);
}

function setGenre(genre) {
    moviesData = [];
    displayedMovies = 0;
    currentPage = 1;
    currentGenre = genre;
    getMovies(genre);
}

function redirectToMoviePage(imdbID) {
    window.location.href = `movie-details.html?id=${imdbID}`;
}

// Default genre set to 'Action'
setGenre('Action');
