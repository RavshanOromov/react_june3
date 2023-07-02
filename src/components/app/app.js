import React from 'react'
import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import './app.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: [
        {name: 'Empire of Osman', viewers: 658, favourite: true, id: 1},
        {name: 'Osman', viewers: 428, favourite: false, id: 2},
        {name: 'Empire of Omar', viewers: 988, favourite: true, id: 3},
      ],
    }
  }

  onDelete = id => {
    this.setState(({ data }) => {
      // const index = data.findIndex(c => c.id === id )
      // data.splice(index, 1) BU MUTABLE
      const newArr = data.filter(c => c.id != id)
      console.log(newArr);

      return {
        data,
      }
    })
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
            <MovieList data={data} onDelete={this.onDelete}/>
            <MoviesAddForm />
          </div>
      </div>
    )
  }

}

export default App