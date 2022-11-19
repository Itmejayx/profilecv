import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <section className="contact container section" id='contact'>
        <h2 className="section__title">Contact Me</h2>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Email' />
            </div>

            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Subject' />
            </div>

            <div className="contact__form-div">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input contact__form-area' placeholder='Write your message'></textarea>
            </div>
            
          </div>
          <button className='btn'>Send Message</button>
        </form>
        <div className="col-md-4">
            <div className="single-contact">
              <i className="fa fa-map-marker"></i>
              <h5>Address</h5>
              <p>Vinh Hien, Phu Loc, Thua Thien Hue</p>
            </div>
            <div className="single-contact">
              <i className="fa fa-phone"></i>
              <h5>Phone</h5>
              <p>(+84) 39 820 4520</p>
            </div>
            <div className="single-contact">
              <i className="fa fa-envelope"></i>
              <h5>Email</h5>
              <p>vtrung0823@gmail.com</p>
            </div>
        </div>
    </section>


/* <section className="contact pt-100 pb-100" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mx-auto text-center">
            <div className="section-title mb-100">
              <p>get in touch</p>
              <h4>contact me</h4>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-8">
            <form action="#" class="contact-form">
              <div class="row">
                <div className="col-xl-6">
                  <input type="text" placeholder="name" />
                </div>
                <div className="col-xl-6">
                  <input type="text" placeholder="email" />
                </div>
                <div className="col-xl-6">
                  <input type="text" placeholder="subject" />
                </div>
                <div className="col-xl-6">
                  <input type="text" placeholder="telephone" />
                </div>
                <div className="col-xl-12">
                  <textarea placeholder="message" cols="30" rows="10"></textarea>
                  <button className='btn' type='submit'>Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="single-contact">
              <i className="fa fa-map-marker"></i>
              <h5>Address</h5>
              <p>Vinh Hien, Phu Loc, Thua Thien Hue</p>
            </div>
            <div className="single-contact">
              <i className="fa fa-phone"></i>
              <h5>Phone</h5>
              <p>(+84) 39 820 4520</p>
            </div>
            <div className="single-contact">
              <i className="fa fa-envelope"></i>
              <h5>Email</h5>
              <p>vtrung0823@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section> */
  )
}

export default contact