import React from 'react'

const WebTabel = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <p style={{fontSize:"3.2rem", lineHeight:"4rem", letterSpacing:"-2%"}}>
            <b>Frequently Asked Question</b>
        </p>
        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus expedita quidem aperiam deleniti laborum sapiente ducimus nulla saepe ipsum consequatur asperiores, vero quisquam, unde dolorem nostrum at esse quas odio?
        </p>
      </div>
      <hr />
      <div className='row'>
        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Authentification Issues</b></p>
                <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Porttitor nec est nisi, id nunc.</p>
            </div>
            <div>
                <button className='btn btn-light text-primary'>New</button>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</b></p>
            </div>
            <div>
                {/* <button className='btn btn-light text-primary'>New</button> */}
                <div className='d-flex justify-content-between'>
                    <div className='mx-2'>
                        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Updated last week</p>
                    </div>
                    <div>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Cras vitae, scelerisque tortor augue.</b></p>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                    <div className='mx-2'>
                        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Updated Today</p>
                    </div>
                    <div>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</b></p>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                    <div className='mx-2'>
                        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Updated 2 days ago</p>
                    </div>
                    <div>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Pretium ultricies donec non mollis senectus lectus libero tellus.</b></p>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                    <div className='mx-2'>
                        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Updated 3 days ago</p>
                    </div>
                    <div>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:"1.8rem", lineHeight:"2.8rem", letterSpacing:"-0.01rem"}}><b>Elit massa amet aenean ultrices vitae placerat augue.</b></p>
            </div>
            <div>
            <div className='d-flex justify-content-between'>
                    <div className='mx-2'>
                        <p style={{fontSize:"1.6rem", lineHeight:"2.4rem", letterSpacing:"-0.01rem"}}>Updated 4 days ago</p>
                    </div>
                    <div>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />

      </div>
    </div>
  )
}

export default WebTabel
