import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Travel Organizer Web</h3>

          <div className="portfolio__item-cta">
           <a href="https://github.com/thamara1997" className='btn' target='_blank'>Github</a>
           <a href="https://thamara1997.github.io/Travel-organizer-website/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>PSD BASE Web </h3>

          <div className="portfolio__item-cta">
           <a href="https://github.com/thamara1997" className='btn' target='_blank' >Github</a>
           <a href="https://github.com/thamara1997" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>MusiCola Web</h3>

          <div className="portfolio__item-cta">
           <a href="https://github.com/thamara1997" className='btn' target='_blank' >Github</a>
           <a href="https://thamara1997.github.io/Musicola-website/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Idilio Designs</h3>

          <div className="portfolio__item-cta">
           <a href="https://idilio-design.web.app" className='btn' target='_blank' >Idilio</a>
           <a href="https://www.facebook.com/idiliodesigns" className='btn btn-primary' target='_blank' >FaceBook</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Engagement Shoot</h3>

          <div className="portfolio__item-cta">
           <a href="https://flic.kr/s/aHBqjzSpE4" className='btn' target='_blank' >Flicker</a>
           <a href="https://flic.kr/s/aHBqjzSpE4" className='btn btn-primary' target='_blank' >View Album</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Graphic Designs</h3>

          <div className="portfolio__item-cta">
           <a href="https://flic.kr/s/aHBqjzSrWg" className='btn' target='_blank' >Flicker</a>
           <a href="https://flic.kr/s/aHBqjzSrWg" className='btn btn-primary' target='_blank' >View Graphics</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio