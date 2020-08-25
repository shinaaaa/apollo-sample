let movies = [
  { id: "0", name: "흥부", score: 67 },
  { id: "1", name: "심봉사", score: 67 },
  { id: "2", name: "심청이", score: 20 },
  { id: "3", name: "홍길동", score: 23 },
  { id: "4", name: "콩쥐", score: 21 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovies = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
