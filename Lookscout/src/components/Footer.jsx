import React from 'react'
import logo from "../assets/logo.svg"
import data from "../data.json"
import footericon from "../assets/footericon.svg"

const Footer = () => {
    const FooterStyle = {
        backgroundColor: "#FFF",
        bottom: 0,
        width: "100%",
        color: "black",
        padding: "0 6.2rem"
      };
    return (
        <footer className="text-center text-lg-start" style={FooterStyle}>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 mx-auto mb-4">
                {/* Content */}
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="" />
                </a>
                <p className="my-2" style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>
                  {data.footer.tagline}
                </p>
                <div className="d-flex justify-content-start  mb-2">
                            <div>
                                <i className="fa-brands fa-twitter mx-1"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-facebook mx-1"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-linkedin mx-1"></i>
                            </div>
                            <div>
                                <i className="fa-brands fa-telegram mx-1"></i>
                            </div>
                        </div>
              </div>
              {/* Grid column */}
  
              <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                {data.Products.map((info, index) => (
                  <p key={index}>
                    {info.name}
                  </p>
                ))}
              </div>
              {/* Grid column */}
              <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                {data.Resources.map((info, index) => (
                  <p key={index}>
                   {info.name}
                  </p>
                ))}
              </div>
              {/* Grid column */}
  
              <div className="col-md-2 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                {data.AboutUs.map((info, index) => (
                  <p key={index}>
                    {info.name}
                  </p>
                ))}
              </div>
              {/* Grid column */}

              {/* Grid column */}
  
              <div className="col-md-2 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                {data.Company.map((info, index) => (
                  <p key={index}>
                    {info.name}
                  </p>
                ))}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
  
        {/* Copyright */}
        <div className="col">
            <div className='row'><img src={footericon} alt="" height="15rem" width="15rem"/></div>
            <div className='row text-center mt-2' style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>
                <p> © 2023 Lookscout. All Rights Reserved.</p></div>
         
        </div>
        {/* Copyright */}
      </footer>
    )
}

export default Footer
