import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designs</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modern Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Source File & Documentation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multiple Design Ideas</p>
            </li>
          </ul>
        </article>

        {/*end cover art design*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack Web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RestFul API & Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Side Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing & Performance Tuning</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Controlling</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Hosting and Deploy</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Album or single cover art .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>High end Photoshop Editing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motion Cover art.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flyers and Posters.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photo Retouching.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo design for Business .</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
