import http from "./httpService";

const moviesEndpoint = "/movies";

function getMovieEndpointById(id) {
  return `${moviesEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(id) {
  const movieEndpoint = getMovieEndpointById(id);
  return http.get(movieEndpoint);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    const movieEndpoint = getMovieEndpointById(movie._id);
    return http.put(movieEndpoint, body);
  }
  return http.post(moviesEndpoint, movie);
}

export function deleteMovie(id) {
  const movieEndpoint = getMovieEndpointById(id);
  return http.delete(movieEndpoint);
}
