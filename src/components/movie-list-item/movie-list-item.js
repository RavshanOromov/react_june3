// import './movie-list-item.css'


// const MovieListItem = ({ name, viewers, favourite }) => {
//   return (
//    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`} >
//       <span className='list-group-item-label'> 
//       {name}
//       </span>
//       <input type='number' className='list-group-item-input' defaultValue={viewers} />
//       <div className='d-flex justify-content-center align-items-center'>
//        <button type='button' className='btn-cookie btn-sm'>
//         <i className='fas fa-cookie'></i>
//        </button>
//        <button type='button' className='btn-trash btn-sm'>
//         <i className='fas fa-trash'></i>
//        </button>
//        <i className='fas fa-star'></i>
//       </div>
//    </li>
//   )
// }


// CLASSlar bn  ISHLASH

import { Component } from 'react'
import './movie-list-item.css'

class MovieListItem extends Component{
  constructor(props) {
    super(props)
    this.state = { favourite: false, like: false }
  }

// onFavourite 2XIL KURINISHDA YOZSAK BULADI
// 1CHI USUL
// onFavourite = () => {
//   this.setState(prevState => ({
//     favourite: !prevState.favourite,
//   }))
// }

// 2CHI USUL BIRINCHISIDAN KURA ADVANCED VERSION
onFavourite = () => {
  this.setState(({favourite}) => ({
    favourite: !favourite,
  }))
}

onLike = () => {
  this.setState(({ like }) => ({
    like: !like,
  }))
}

  render() {
    const { name, viewers, onDelete, onToggleFavourite, onToggleLike, favourite, like } = this.props
    // const {favourite, like } = this.state


    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`} >
         <span onClick={onToggleLike} className='list-group-item-label'> 
         {name}
         </span>
         <input type='number' className='list-group-item-input' defaultValue={viewers} />
         <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-cookie btn-sm' onClick={onToggleFavourite}>
           <i className='fas fa-cookie'></i>
          </button>
          <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
           <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
         </div>
      </li>
     )
  }
}

export default MovieListItem