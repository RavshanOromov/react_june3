import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data, onDelete, onToggleFavourite, onToggleLike}) => {
  return (
    <ul className='movie-list'>
       {data.map(item => (
        <MovieListItem 
        key={item.id} 
        {...item} 
        like={item.like}
        favourite={item.favourite}
        onDelete={() => onDelete(item.id)}
        onToggleFavourite={() => onToggleFavourite(item.id)}
        onToggleLike={() => onToggleLike(item.id)}
         />
        // <MovieListItem name={item.name} viewers={item.viewers} favourite={item.favourite} tepadaki 8ci qatordagi kod bn bir xil lekin 8ci qatordaki code more professionlal hisoblanadi/>
       ))}

    </ul>
  )
}

export default MovieList