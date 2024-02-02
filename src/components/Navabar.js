import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



export default function Navabar({mode, title, toggleMode}) {
  let location = useLocation();
  useEffect(() =>{
    // console.log(location.pathname)
  },[location]);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} `}>
    <div className="container-fluid">
    <span className="nav navbar-brand" >{title}</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
       
      </ul>
      <div className={`form-check form-switch text-${mode ==='light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick = {toggleMode} type="checkbox" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${mode === 'dark'?'Light':'Dark'} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navabar.propTypes = {
    title : PropTypes.string.isRequired,
}

Navabar.defaultProps = {
    title : 'set title here',
}