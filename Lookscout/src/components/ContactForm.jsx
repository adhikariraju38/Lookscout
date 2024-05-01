import React, { useState } from 'react'
import "../App.css"

const ContactForm = () => {
  const styles = {
    style: {
      radius: "0.6rem",
      border: "0.1rem",
      padding: "1.2rem 1.6rem",
      backgroundColor: "#2E3545",
      borderColor: "#2E3545",
      color: "#A5ACBA"
    }
  }
  const host = "https://lookscout-backend.vercel.app/";
  const contactsInitial = [];
  const [contacts, setContacts] = useState(contactsInitial);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    getintouch: "",
    message: "",
  });


  //Add a service
  const addContact = async (
    name,
    email,
    phone,
    getintouch,
    message
  ) => {
    //API call
    const response = await fetch(`${host}/contacts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        getintouch,
        message,
      }),
    });

    const contact = await response.json();
    setContacts(contacts.concat(contact));
    return contact;
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let resJson = await addContact(
      contact.name,
      contact.email,
      contact.phone,
      contact.getintouch,
      contact.message,
    );
    if (resJson.errors && resJson.errors.length > 0) {
      resJson.errors.forEach((error) => {
        console.log(error)
      });
    }
    if (resJson.result) {
      console.log("success")
      setContact({
        name: "",
        email: "",
        phone: "",
        getintouch: "",
        message: "",

      });
    }
  };
  return (
    <form className='mt-5' style={{ backgroundColor: "#151B28", borderRadius: "0.5rem", padding: "6.4rem 0" }}>
      <div className='container'>
        <div className='row text-center text-light'>
          <p style={{ fontSize: "3.2rem", lineHeight: "4rem", letterSpacing: "-2%", fontWeight: "bold" }}>Get In Touch With Us</p>
          <p style={{ fontSize: "1.6rem", lineHeight: "2.4rem", letterSpacing: "-0.01rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div style={{ backgroundColor: "#1C2534", border: "0.1rem", radius: "0.8rem", padding: "0 4rem", paddingTop: "3.2rem" }}>
          <div className="row mb-4 text-light">
            <div className="col-md-6 mb-2">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="name">First name</label>
                <input type="text" id="name" name='name' className="form-control" onChange={handleChange}
                  required placeholder="Input" value={contact.name} style={styles.style} />

              </div>
            </div>
            <div className="col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" name='email' required
                  onChange={handleChange} value={contact.email} className="form-control" placeholder="Input" style={styles.style} />

              </div>
            </div>
          </div>

          <div className="row mb-4 text-light">
            <div className="col-md-6 mb-2">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name='phone' onChange={handleChange} value={contact.phone} className="form-control" placeholder="+000" style={styles.style} />

              </div>
            </div>
            <div className="col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="getintouch">Get In Touch With Us</label>
                <input type="text" id="getintouch" name='getintouch' onChange={handleChange} value={contact.getintouch} className="form-control" placeholder="Dropdown" style={styles.style} />

              </div>
            </div>
          </div>

          {/* Message input */}
          <div data-mdb-input-init className="form-outline mb-4 text-light">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name='message' required onChange={handleChange} value={contact.message} rows="4" placeholder="Hi! We are Lookscout..." style={styles.style}></textarea>

          </div>

          {/* Checkbox */}
          <div className="form-check d-flex justify-content-start mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="form6Example8"
            />
            <label className="form-check-label text-light" htmlFor="form6Example8" > I agree with Lookscout Privacy Policy </label>
          </div>

          {/* Submit button */}
          <button data-mdb-ripple-init type="button" onClick={handleClick} className="btn btn-primary btn-block mb-4 text-light" style={{ padding: "1.2rem 1.8rem", radius: "0.6rem" }}>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
