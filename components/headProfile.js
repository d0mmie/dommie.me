import React from 'react'

export default class HeadProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.toggleModalOpen = this.toggleModalOpen.bind(this)
  }

  toggleModalOpen () {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }))
  }
  render () {
    return (
      <div className='is-bg-grey2'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-2'>
              <figure className='image' onClick={this.toggleModalOpen}>
                <img className='is-small-rounded' src='https://media.dommie.me/profile.jpg' alt='รูปโปรไฟล์' />
              </figure>
              <div className={`modal ${this.state.modalOpen && 'is-active'}`}>
                <div className='modal-background' onClick={this.toggleModalOpen} />
                <div className='modal-content'>
                  <p className='image'>
                    <img src='https://media.dommie.me/profile.jpg' alt='รูปโปรไฟล์' />
                  </p>
                </div>
                <button className='modal-close is-large' onClick={this.toggleModalOpen} aria-label='close'></button>
              </div>
            </div>
            <div className='column'>
              <section className='section'>
                <h1 className='title is-2'>{'บุลิน โสมศรี'}</h1>
                <h2 className='subtitle is-4'>{'(Bulin Somsee)'}</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
