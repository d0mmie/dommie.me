import React from 'react'

export default class Contact extends React.Component {
  render () {
    return (
      <section className='section'>
        <div className='column is-12'>
          <h1 className='title is-3'>{'โซเชียลมีเดีย'}</h1>
        </div>
        <section className='section'>
          <div className='columns has-text-centered'>
            <div className='column'>
              <a href='https://github.com/d0mmie' target='_blank' className='icon is-large has-text-black'>
                <i className='ion-logo-github is-size-1' />
              </a>
            </div>
            <div className='column'>
              <a href='https://fb.me/dommiesp' target='_blank' className='icon has-text-black'>
                <i className='ion-logo-facebook is-size-1' />
              </a>
            </div>
            <div className='column'>
              <a href='https://instagr.am/d0mmie.p' target='_blank' className='icon has-text-black'>
                <i className='ion-logo-instagram is-size-1' />
              </a>
            </div>
            <div className='column'>
              <a href='https://twitter.com/bulinSomsee' target='_blank' className='icon has-text-black'>
                <i className='ion-logo-twitter is-size-1' />
              </a>
            </div>
          </div>
        </section>
      </section>
    )
  }
}