import './contact.css'
import React, { useState as UseState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef as UseRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function contact() {
  const form = UseRef();
  const [userName, setUserName] = UseState("")
  const [email, setEmail] = UseState("")
  const [subject, setSubject] = UseState("")
  const [message, setMessage] = UseState("")
  const handleSetUserName = (e) => {
    const userNameId = document.getElementsByName('user_name')
    setUserName(e.target.value)
  }
  const handleSetEmail = (e) => {
    const emailId = document.getElementsByName('user_email')
    setEmail(e.target.value)
  }

  const handleSetSubject = (e) => {
    const subjectId = document.getElementsByName('user_subject')
    setSubject(e.target.value)
  }

  const handleSetMessage = (e) => {
    const messageId = document.getElementsByName('user_message')
    setMessage(e.target.value)
  }
  const showToastMessage = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qldc2xv', 'template_fhb2x34', form.current, 'R4OAVT7UAsNFc69Jr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input type="text" name="user_name" className="contact__form-input" placeholder='Name' onChange={handleSetUserName} value={userName} />
          </div>

          <div className="contact__form-div">
            <input type="email" name='user_email' className="contact__form-input" placeholder='Email' onChange={handleSetEmail} value={email} />
          </div>

          <div className="contact__form-div">
            <input type="text" name='user_subject' className="contact__form-input" placeholder='Subject' onChange={handleSetSubject} value={subject} />
          </div>

          <div className="contact__form-div">
            <textarea name="user_message" id="" cols="30" rows="10" className='contact__form-input contact__form-area' onChange={handleSetMessage} value={message} placeholder='Write your message'></textarea>
          </div>

        </div>
        <button onClick={showToastMessage} className='btn' disabled={userName === "" || email === "" || message === ""}>Send Message</button>
        <ToastContainer />
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
          <a href='tel:0398204520' className='tellme'>
            <p>(+84) 39 820 4520</p>
          </a>
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