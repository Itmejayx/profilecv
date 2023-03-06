import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
import MyCV from '../../assets/TRANVANTRUNG-CV-PHP-FRESHER (1).pdf'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Tran Van Trung, Back-end developer from Thua Thien Hue, Vietnam , with my youth and enthusiasm I am always ready to listen and fulfill the requirements of the company.Learning new languages and technologies is something I'm passionate about. I like working with a team where
              allteam members can share and help each other.
            </p>
            <a href={MyCV} className="btn" download>Download CV</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About