import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  original_title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
});

const MovieCollection = model('movies', movieSchema);
export default MovieCollection;
