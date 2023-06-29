import './movies-add-form.css'

const MoviesAddForm = () => {
  return (
    <div className='movies-add-form'>
        <h3>Yangi kinolar qushish</h3>
        <form className='add-form d-flex'>
            <input type='text' className='form-control new-post-label' placeholder='Qanday kino?' />
            <input type='number' className='form-control new-post-label' placeholder='Nechi marotaba kurilgan?' />
            <button type='subnmit' className='btn btn-outline-dark'>
                Qushish
            </button>
        </form>
    </div>
  )
}

export default MoviesAddForm