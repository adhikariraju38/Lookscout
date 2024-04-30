import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
  const styles = {
    style: {
        fontSize:"1.5rem",
        lineHeight:"2.2rem",
        color:"#272D37",
        fontWeight: "bold"
    },
    button:{
      padding:"1.2rem 1.8rem",
      borderRadius:"0.5rem",
      fontSize:"1.5rem",
      lineHeight:"2.2rem"
    }
};
  return (
    <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid" style={{marginLeft:"3rem", marginRight:"3rem", paddingTop:"0.5rem", paddingBottom:"0.5rem"}}>
    <a className="navbar-brand" href="/"><img src={logo} alt='Lookscout'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={styles.style}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/" style={styles.style}>Our Products</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={styles.style}>
            Resources
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true" style={styles.style}>Contacts</a>
        </li>
        </ul>
        <button className="btn text-primary"  type="submit" style={styles.button}>Sign Up</button>
        <button className="btn btn-primary" type="submit"  style={styles.button}>Log In</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar
