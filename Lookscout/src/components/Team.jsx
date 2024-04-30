import React from 'react'
import team1 from "../assets/team/1.svg"
import team2 from "../assets/team/2.svg"
import team3 from "../assets/team/3.svg"



const Team = () => {
    const styles = {
        style: {
            height: "auto",
            width: "auto",
            padding: '6.4rem 0',
            gap: '6.4rem',
        },
        divstyle: {
            height: "auto",
            width: "auto",
            padding: '0 3.2rem',
        },
        name: {
            fontSize: "2.2rem",
            lineHeight: "3rem",
            letterSpacing: "-1%"
        },
        post: {
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            letterSpacing: "-0.01rem"
        },
    };
    return (
        <div className='container mt-4 mb-3' style={styles.style}>
            <div className='row text-center mb-4'>
                <p style={{ fontSize: "3.2rem", lineHeight: "4rem", letterSpacing: "-2%" }}><b>The Core of Our Team</b></p>
                <p style={{ fontSize: "1.6rem", lineHeight: "2.4rem", letterSpacing: "-0.01rem" }}>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
            </div>
            <div className='row mb-2' style={styles.divstyle}>
                <div className='col-md-4'>
                    <div className='row mx-1'>
                        <img src={team1} alt="" />
                        <p style={styles.name}>Morgan Drew</p>
                        <p style={styles.post}>Manager</p>
                        <div className="d-flex justify-content-start mb-2">
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


                </div>
                <div className='col-md-4'>
                    <div className='row mx-1'>
                        <img src={team2} alt="" />
                        <p style={styles.name}>Jeffrey Walker</p>
                        <p style={styles.post}>Lead Designer</p>
                        <div className="d-flex justify-content-start mb-2">
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
                </div>
                <div className='col-md-4'>
                    <div className='row mx-1'>
                        <img src={team3} alt="" />
                        <p style={styles.name}>Andrew Steve</p>
                        <p style={styles.post}>UI/UX Developer</p>
                        <div className="d-flex justify-content-start mb-2">
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
                </div>
            </div>
        </div>
    )
}

export default Team
