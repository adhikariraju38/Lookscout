import React from 'react'
import "../App.css"

const ContactForm = () => {
    const styles={
        style:{
            radius:"0.6rem",
            border:"0.1rem",
            padding:"1.2rem 1.6rem",
            backgroundColor:"#2E3545",
            borderColor: "#2E3545",
            color: "#A5ACBA"
        }
    }
  return (
    <form className='mt-5' style={{backgroundColor:"#151B28", borderRadius:"0.5rem", padding:"6.4rem 0"}}>
        <div className='container'>
    <div className='row text-center text-light'>
        <p style={{fontSize:"3.2rem", lineHeight:"4rem", letterSpacing:"-2%", fontWeight:"bold"}}>Get In Touch With Us</p>
        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    </div>
    {/* 2 column grid layout with text inputs for the first and last names */}
    <div style={{backgroundColor:"#1C2534", border:"0.1rem", radius:"0.8rem",padding:"0 4rem", paddingTop:"3.2rem"}}>
    <div className="row mb-4 text-light">
      <div className="col-md-6 mb-2">
        <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example1">First name</label>
          <input type="text" id="form6Example1" className="form-control" placeholder="Input"  style={styles.style}/>
          
        </div>
      </div>
      <div className="col-md-6">
        <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example2">Email</label>
          <input type="email" id="form6Example2" className="form-control" placeholder="Input" style={styles.style}/>
          
        </div>
      </div>
    </div>

    <div className="row mb-4 text-light">
      <div className="col-md-6 mb-2">
        <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example1">Phone Number</label>
          <input type="text" id="form6Example1" className="form-control" placeholder="+000" style={styles.style}/>
          
        </div>
      </div>
      <div className="col-md-6">
        <div data-mdb-input-init className="form-outline">
        <label className="form-label" htmlFor="form6Example2">Get In Touch With Us</label>
          <input type="email" id="form6Example2" className="form-control" placeholder="Dropdown" style={styles.style}/>
          
        </div>
      </div>
    </div>

    {/* Message input */}
    <div data-mdb-input-init className="form-outline mb-4 text-light">
    <label className="form-label" htmlFor="form6Example7">Message</label>
      <textarea className="form-control" id="form6Example7" rows="4" placeholder="Hi! We are Lookscout..." style={styles.style}></textarea>
      
    </div>

    {/* Checkbox */}
    <div className="form-check d-flex justify-content-start mb-4">
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        id="form6Example8"
      />
      <label className="form-check-label text-light" htmlFor="form6Example8" > I agree with Lookscout Privacy Policy </label>
    </div>

    {/* Submit button */}
    <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4 text-light" style={{padding:"1.2rem 1.8rem", radius:"0.6rem"}}>Submit</button>
    </div>
    </div>
  </form>
  )
}

export default ContactForm
