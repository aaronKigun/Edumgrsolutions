import React, { Component } from 'react';
import './Contact.css'
import { Locate, Website, Facebook, Twitter, Whatsapp, Ticktok } from '../assets'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', this.state);
  };

  render() {
    return (
      <>
      <div className='contact'>
        <h2>Contact Us</h2>
        <div className='under'>
        <form onSubmit={this.handleSubmit}>
          <div className='fill'>
            <h5 className='text'>Name</h5>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
              className='ip'
            />
          </div>
          <div className='fill'>
          <h5 className='text'>Email</h5>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              className='ip'
            />
          </div>
          <div className='fill'>
            <h5 className='text '>Phone Number</h5>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              required
              className='ip'
            />
          </div>
          <div className='fill'>
            <h5 className='text'>Message</h5>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
              className='ip'
            />
          </div>
          <div className='fill'>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='locate'>
        <div className='find'>
          <img src={Locate} width={30} className='red'/>&nbsp;
          <p className='address'>&nbsp;No 8 After INEC Office Miango Road, Kufang Jos<br></br>&nbsp;Plateau State.</p>
          </div>
          <div className='find'>
          <img src={Website} width={30} className='red'/>&nbsp;
          <p className='address'>www.edumgrsolution.com</p>
          </div>
          <div className='find'>
          <img src={Facebook} width={30} className='red'/>&nbsp;
          <p className='address'>&nbsp;Edumgr Solutions</p>
          </div>
          <div className='find'>
          <img src={Twitter} width={30} className='red'/>&nbsp;
          <p className='address'>&nbsp;@Edumgr</p>
          </div>
          <div className='find'>
          <img src={Whatsapp} width={30} className='red'/>&nbsp;
          <p className='address'>&nbsp;+234-803-6363-8690</p>
          </div>
          <div className='find'>
          <img src={Ticktok} width={30} className='red'/>&nbsp;
          <p className='address'>&nbsp;Edumgrsolutions</p>
          </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}

export default ContactForm;
