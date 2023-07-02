import './movies-add-form.css'
import { Component  } from 'react'


class MoviesAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      views: '',
    }
  }

  changeHandlerinput = e => {
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render() {
    return (
      <div className='movies-add-form'>
          <h3>Yangi kinolar qushish</h3>
          <form className='add-form d-flex'>
              <input type='text' className='form-control new-post-label' placeholder='Qanday kino?' onChange={this.changeHandlerinput} name='name' />
              <input type='number' className='form-control new-post-label' placeholder='Nechi marotaba kurilgan?' onChange={this.changeHandlerinput} name='views' />
              <button type='subnmit' className='btn btn-outline-dark'>
                  Qushish
              </button>
          </form>
      </div>
    )
  }


}

export default MoviesAddForm