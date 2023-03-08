import React from 'react'
import './project.css'
import Data from './Data'
import Card from './Card'

const Project = () => {
  return (
    <section className='resume container section' id='project'>
      <h2 className="section__title">Project</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
            {Data.map((val , id) => {
              if (val.category === 'education') {
                return (
                  <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} tech={val.tech}/>
                )
              }
            })}
        </div>

        <div className="timeline grid">
            {Data.map((val , index) => {
              if (val.category === 'experience') {
                return (
                  <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} tech={val.tech}/>
                )
              }
            })}
        </div>
      </div>
    </section>
  )
}

export default Project