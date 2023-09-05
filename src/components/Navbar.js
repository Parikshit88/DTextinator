import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="button">{props.title}</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span className="navbar-toggler-icon"></span> */}
    {/* </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                        {/* <li className="nav-item"> */}
                            {/* <a className="nav-link active" aria-current="page" href="button">{props.title}</a> */}
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                            {/* <Link className="nav-link" style={{color: props.mode==='dark'?'white':'black'}} to="/about">{props.aboutText}</Link> */}
                        {/* </li> */}
                    {/* </ul> */}
      {/* </div> */}
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" style={{cursor:'pointer'}} onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchUnCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchUnCheckDefault">Enable {capitalize(props.mode === 'light'?'dark':'light')} Mode</label>
      </div>
  </div>
</nav>
  )
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
