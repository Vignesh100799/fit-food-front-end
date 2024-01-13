import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Welcome from '../Dashboard/Welcome'


const NavBar = ({toggleSidebar}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top position-fixed">
    <div className="container-fluid">
      <button
        type="button"
        id="sidebarCollapse"
        onClick={toggleSidebar}
        className="btn btn-primary"
      >
        <i className="fa fa-bars" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <button
        className="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Welcome/>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-primary" href="#">
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="#">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
              Logout
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar