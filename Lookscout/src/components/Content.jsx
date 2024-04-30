import React from 'react'
import image1 from "../assets/image1.svg"
import tickicon from "../assets/tickicon.svg"
import righticon from "../assets/righticon.svg"


const Content = () => {
    const styles = {
        button: {
            width: '13.3rem',
            height: '4.6rem',
            borderRadius: '0.6rem',
            padding: '1.2rem 1.8rem',
            fontSize:"1.5rem",
            lineHeight:"2.2rem"
          },
      };
      
      
    return (
        <div className='container mt-4 mb-4'>
            <div className='row align-items-center'>
                <div className='col-md-6 mt-4 mb-3'>
                <p style={{fontSize:"3.2rem", lineHeight:"4.2rem", letterSpacing:"-1%"}}>
                <b>Demonstrate branding consequently think outside</b>
                </p>
                <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
                </p>
                <p className='mt-5'>
                <img src={tickicon} alt="tickicon" style={{marginRight:"0.8rem"}}/>
                Enterprise-grade security
                </p>
                <p>
                <img src={tickicon} alt="" style={{marginRight:"0.8rem"}}/>
                99.9% guaranteed uptime SLA
                </p>
                <p>
                    <img src={tickicon} alt="" style={{marginRight:"0.8rem"}}/>
                    Designated customer success team
                </p>
                <button className='mt-5 btn btn-primary' style={styles.button}><b>Start Now </b><img src={righticon} alt="righticon" /></button>
                </div>
                <div className='col-md-6 mt-5'>
                    <img src={image1} alt="image1" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Content
