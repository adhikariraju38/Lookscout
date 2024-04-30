import React from 'react'
import logo1 from "../assets/calltoaction/1.svg"
import logo2 from "../assets/calltoaction/2.svg"
import logo3 from "../assets/calltoaction/3.svg"
import logo4 from "../assets/calltoaction/4.svg"
import logo5 from "../assets/calltoaction/5.svg"
import logo6 from "../assets/calltoaction/6.svg"


const CallToAction = () => {
  return (
    <div style={{backgroundColor:"#2B63D9"}}>
      <div className='container text-center' style={{padding:"6.4rem 0"}}>
        <p className='text-light'>1% OF THE INDUSTRY</p>
        <p className='text-light' style={{fontSize:"3.2rem", lineHeight:"4.2rem",letterSpacing:"-1%"}}><b>Welcome to your new digital reality that
            which will rock your world truly at all.</b>    </p>
            <button className='btn btn-light text-primary mx-3' style={{padding:"1.2rem 1.8rem"}}>Sign Up</button>
            <button className='btn btn-primary' style={{padding:"1.2rem 1.8rem"}}>Log In</button>

      </div>
      <div className='container' style={{padding:"3.2rem 0"}}>
        <div className='row text-center'>
        <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo1} alt="" />
            </div>
            <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo2} alt="" />
            </div>
            <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo3} alt="" />
            </div>
            <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo4} alt="" />
            </div>
            <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo5} alt="" />
            </div>
            <div className='col-md-2' style={{marginTop:"2rem"}}>
                <img src={logo6} alt="" />
            </div>
        </div>
            
      </div>
    </div>
  )
}

export default CallToAction
