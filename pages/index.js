import React from 'react'
import HeadProfile from '../components/headProfile'
import Education from '../components/education'
import Contact from '../components/contact'

export default class Index extends React.Component{
  render () {
    return (
      <React.Fragment>
        <HeadProfile />
        <div className='container'>
          <Contact />
          <Education />
        </div>
      </React.Fragment>
    )
  }
}
