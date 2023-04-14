import { Col } from "react-bootstrap"
import * as Icon from'react-icons/fa';
import logo from '../logo/Spotify_Logo.png'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addQuery } from "../redux/actions";
import { Link, NavLink } from "react-router-dom";

const MyNavBar= ()=>{

const dispatch=useDispatch();
const [query,setQuery]=useState();


return(
<Col xs="2">
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
    <div className="nav-container">
      <a className="navbar-brand" href="index.html">
        <img src={logo} alt="Spotify_Logo" style={{width:'140px',height:'40px'}} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mynav">
          <ul>
            <li className="lin" >
              <NavLink to="/" >

            <Icon.FaHome/>&nbsp; Home
              </NavLink>
              
            </li>
            <li>
              <a className="nav-item nav-link" href="#"><Icon.FaBookOpen />&nbsp; Your
                Library</a>
            </li>
            <li>
        <div className="input-group mt-3">
          <input type="text" className="form-control form-control-sm mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"  value={query} onChange={(e)=>{setQuery(e.target.value)}} />
          <div className="input-group-append" style={{marginBottom: '4%'}}>
            <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onClick={()=>{dispatch(addQuery(query))}}>
              GO
            </button>
          </div>
        </div>
      </li>
          </ul>
          
        </div>
        
      </div>

    </div>
    <div className="nav-btn">
      <button className="btn signup-btn" type="button">Sign Up</button>
      <button className="btn login-btn" type="button">Login</button>
      <br></br>
      <a href="#">Cookie Policy</a> |
      <a href="#"> Privacy</a>
    </div>
  </nav>
  </Col>
)
}

export default MyNavBar

