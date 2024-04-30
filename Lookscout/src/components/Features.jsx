import React from 'react'
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"


const Features = () => {
    const styles = {
        icon: {
            width: '4.8rem',
            height: '4.8rem',
            borderRadius: '3.0rem',
            padding: '0.8rem',
        },
    };
    return (
        <div className='container mt-4'>
            <div className='row text-center mb-3 mt-3'>
                <p style={{ fontSize: "3.2rem", lineHeight: "4rem" }}><b>Messaging for all</b></p>
                <p style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>User generated content in real-time will have multiple touchpoints for offshoring</p>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col-md-4'>
                    <div className='row'><img src={icon2} alt='icon' style={styles.icon}></img></div>
                    <div className='row' style={{ fontSize: "2.2rem", lineHeight: "3rem" }}><b>Easier Work Organization</b></div>
                    <div className='row' style={{ fontSize: "1.6rem", lineHeight: "2.4rem" }}>
                        <p>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='row'><img src={icon3} alt='icon' style={styles.icon}></img></div>
                    <div className='row' style={{ fontSize: "2.2rem", lineHeight: "3rem" }}><b>Fast Connection</b></div>
                    <div className='row' style={{ fontSize: "1.6rem", lineHeight: "2.4rem" }}>
                        <p>Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. </p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='row'><img src={icon1} alt='icon' style={styles.icon}></img></div>
                    <div className='row' style={{ fontSize: "2.2rem", lineHeight: "3rem" }}><b>Streamlined Process</b></div>
                    <div className='row' style={{ fontSize: "1.6rem", lineHeight: "2.4rem" }}>
                        <p>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
