import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = () => {
  return (
    <ul className='movie-list'>
        <MovieListItem />
        <MovieListItem />
    </ul>
  )
}

export default MovieList