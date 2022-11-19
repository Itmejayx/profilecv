import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
import MyCV from '../../assets/TRANVANTRUNG_PHP_INTERN (2).pdf'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Tran Van Trung, Back-end developer from Thua Thien Hue, Vietnam , with my youth and enthusiasm I am always ready to listen and fulfill the requirements of the company.
            </p>
            <a href={MyCV} className="btn" download>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">PHP/Laravel</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage php__laravel"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">HTML/CSS</h3>
                <span className="skills__number">65%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage html__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">ReactJS</h3>
                <span className="skills__number">35%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage mysql"></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About