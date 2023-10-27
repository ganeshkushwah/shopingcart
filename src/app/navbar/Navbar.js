import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.avif';
import "./navbar.css";
import { useSelector } from 'react-redux'; 
import cartimg from "../assets/images/cartimg.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="main">
      <a className="navbar-brand" href="#">
        <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="Your Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <Link to={"./pagesdetail"}>
        <div>
        {cartItems.length > 0 && (
            <span  style={{ fontSize:"25px",color:"black"}} className="cart-item-count">{cartItems.length}</span>
          )}
          <img src={cartimg} style={{ width: "100px", height: "80px", paddingTop: "5%" }} alt="Your Logo" />
         
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
