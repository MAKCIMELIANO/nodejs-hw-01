import MovieCollection from '../db/models/Movie.js';

export const getMovies = async () => {
  const data = await MovieCollection.find();
  return data;
};

export const getMovieById = async (id) => {
  const data = await MovieCollection.findById(id);
  return data;
};
