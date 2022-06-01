import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience_webdevelopment">
            <h3>Web Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Mysql</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_graphicdesign">
          <h3>Graphic Design</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Lightroom</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>PremierPro</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Aftereffect</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Freelancing</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                <h4>Canva</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience
