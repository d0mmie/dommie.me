import React from 'react'

export default class Education extends React.Component {
  render () {
    return (
      <section className='section'>
        <div className='column is-12'>
          <h1 className='title is-3'>{'ประวัติการศึกษา'}</h1>
        </div>
        <div className='box'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src='http://www.kp.ac.th/website/images/logo2copy2.png' alt='โรงเรียนกำแพงเพชรพิทยาคม' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>
                    <h1 className='title is-5'>{'โรงเรียนกำแพงเพชรพิทยาคม'}</h1>
                  </strong>
                </p>
                <p>
                  <h2 className='subtitle is-6'>{'มัธยมศึกษาตอนต้น (พ.ศ.2555 - พ.ศ.2557)'}</h2>
                </p>
                <p>
                  {'สายการเรียน คณิตศาสตร์-คอมพิวเตอร์'}
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className='box'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src='http://www.kp.ac.th/website/images/logo2copy2.png' alt='โรงเรียนกำแพงเพชรพิทยาคม' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>
                    <h1 className='title is-5'>{'โรงเรียนกำแพงเพชรพิทยาคม'}</h1>
                  </strong>
                </p>
                <p>
                  <h2 className='subtitle is-6'>{'มัธยมศึกษาตอนปลาย (พ.ศ.2558 - พ.ศ.2560)'}</h2>
                </p>
                <p>
                  {'สายการเรียน วิทยาศาสตร์-คณิตศาสตร์'}
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className='box'>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src='https://media.dommie.me/school_logo.jpg' alt='โรงเรียนการไปรษณีย์' />
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>
                    <h1 className='title is-5'>{'โรงเรียนการไปรษณีย์'}</h1>
                  </strong>
                </p>
                <p>
                  <h2 className='subtitle is-6'>{'พ.ศ.2561'}</h2>
                </p>
                <p>
                  {'ปัจจุบันกำลังศีกษาอยู่'}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  }
}
