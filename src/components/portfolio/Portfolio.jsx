import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Travel Organizer Web</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thamara1997"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://thamara1997.github.io/Travel-organizer-website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>IDILIO Graphic Platform</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://idilio-design.web.app"
              className="btn"
              target="_blank"
            >
              Idilio
            </a>
            <a
              href="https://www.facebook.com/idiliodesigns"
              className="btn btn-primary"
              target="_blank"
            >
              FaceBook
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>MusiCola Web</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thamara1997"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://thamara1997.github.io/Musicola-website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>PSD-BASE WordPress </h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thamara1997"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/thamara1997"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>LiberBin Web</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/thamara1997/LiberBin"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://liberbin.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Figma Works</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://www.figma.com/community/file/1280385963137143167/SyntheticIQ-Lab"
              className="btn"
              target="_blank"
            >
              Figma
            </a>
            <a
              href="https://liberbin.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Profile
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>QuesNet</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://www.figma.com/file/ApM7i74PB4FyuBhvwvpXgp/QuesNet?type=design&node-id=0%3A1&mode=design&t=1BMZwxlcd7HSzQw4-1"
              className="btn"
              target="_blank"
            >
              Figma
            </a>
            <a
              href="https://www.figma.com/file/ApM7i74PB4FyuBhvwvpXgp/QuesNet?type=design&node-id=0%3A1&mode=design&t=1BMZwxlcd7HSzQw4-1"
              className="btn btn-primary"
              target="_blank"
            >
              On Going
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Freelance Projects</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://www.fiverr.com/graphically_d?up_rollout=true"
              className="btn"
              target="_blank"
            >
              Fiverr
            </a>
            <a
              href="https://www.fiverr.com/users/graphically_d/portfolio?origin=seller_profile"
              className="btn btn-primary"
              target="_blank"
            >
              View Graphics
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Graphic Projects</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://flic.kr/s/aHBqjzSrWg"
              className="btn"
              target="_blank"
            >
              Flicker
            </a>
            <a
              href="https://flic.kr/s/aHBqjzSrWg"
              className="btn btn-primary"
              target="_blank"
            >
              View Graphics
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
