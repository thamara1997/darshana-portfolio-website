import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Album or single cover art .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>High end Photoshop Editing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motion Cover art for your design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flyers and Posters.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photo Retouching.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo design for business .</p>
            </li>
          </ul>

        </article>

        {/*end cover art design*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern Design Templates.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PSD to wordpress web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML,CSS,JS Based Web Developing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX/UI designer.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Hosting and Deploy.</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wedding Photography.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Event Photography.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Travel Photography Partner.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Model Photography.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Real State Photography.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Raw Photo Editing.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services