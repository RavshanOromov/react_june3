import React from 'react'
import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { v4 as uuidv4 } from 'uuid' 
import './app.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: [
        {name: 'Empire of Osman', viewers: 658, favourite: false,  like: false, id: 1},
        {name: 'Osman', viewers: 428, favourite: false, like: false, id: 2},
        {name: 'Empire of Omar', viewers: 988, favourite: false, like: false, id: 3},
      ],
    }
  }

  // onDelete = id => {
  //   this.setState(({ data }) => {
  //     // const index = data.findIndex(c => c.id === id )
  //     // data.splice(index, 1) BU MUTABLE bu tugridan tugri uzgartirildi
  //    const newArr = data.filter(c => c.id !== id)  // bu esa immutable bulli chunki bunga yangi uzgaruvchi yaratib usha uzgaruvchi orqali datani uzgartirildi
  //     console.log(newArr);

  //     return {
  //       data:newArr,
  //     }
  //   })
  // }

onDelete = id => {
    this.setState(({ data }) =>({
      data: data.filter(c => c.id !== id),
    }))
  }

addForm = item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: true, like: true }
    this.setState(({ data }) => ({
      data: [...data, newItem ],
      }))
  }
// addForm =  item => {
//   this.setState(({ data }) => ({
//     data: [...data, item],
//   }))
// }

onToggleFavourite = id => {
  console.log(`Favourite ${id}`);
}
onToggleLike = id => {
  console.log(`Like ${id}`);
}

  render() {
    const { data } = this.state

    return (
      <div className='app font-monospace'>
          <div className='content'>
            <AppInfo />
            <div className='search-panel' >
              <SearchPanel />
              <AppFilter />
            </div>
            <MovieList onToggleFavourite={this.onToggleFavourite} onToggleLike={this.onToggleLike} data={data} onDelete={this.onDelete}/>
            <MoviesAddForm addForm= {this.addForm} />
          </div>
      </div>
    )
  }

}

export default App