import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data, onDelete }) => {
  return (
    <ul className='movie-list'>
       {data.map(item => (
        <MovieListItem key={item.id} {...item} onDelete={() => onDelete(item.id)} />
        // <MovieListItem name={item.name} viewers={item.viewers} favourite={item.favourite} tepadaki 8ci qatordagi kod bn bir xil lekin 8ci qatordaki code more professionlal hisoblanadi/>
       ))}

    </ul>
  )
}

export default MovieList