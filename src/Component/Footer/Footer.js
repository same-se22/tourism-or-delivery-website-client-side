import React from "react";
import "./Footer.css";
import logo from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="row text-white footer-info">
          <div className="col-lg-4">
            <img src={logo} width="180px" alt="" />
            <p className=" my-3 text-white-50">@2021</p>
          </div>
          <div className="col-lg-2">
            <p className="fw-bold mb-1">
              <strong>Company</strong>
            </p>
            <NavLink className="text-decoration-none text-white" to="/">
            We are one of the leading Group of Companies in Bangladesh. 
            </NavLink>
            <br />
            <br />
            <br />
            <NavLink className="text-decoration-none text-white" to="/">
            Working in the field of Import, Export, Response Marketing, Tours and Travels, Domain & Hosting and e-Commerce.
 </NavLink>
            <br />
            <NavLink className="text-decoration-none text-white" to="/">
              Booking
            </NavLink>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold mb-1">
              <strong>Further Information</strong>
            </p>
            <p className="m-0">
              {" "}
              <small>  reviews + lowest prices on hotels, amazing experiences + restaurants.</small>
            </p>
            <p className="m-0">
              {" "}
              <small> Privacy policy </small>
            </p>
          </div>
          <div className="col-lg-2">
            <p className="fw-bold mb-1">
              <strong>Follow us</strong>
            </p>
            <a className="me-2" href="/">
              <i class="fab fa-facebook"></i>
              <strong>facebook</strong>
            </a>
            <br />
            <a className="me-2" href="/">
              <i class="fab fa-instagram"></i>
              <strong>instagram</strong>
            </a>
            <br />
            <a className="me-2" href="/">
              <i class="fab fa-twitter"></i>
              <strong>twitter</strong>
            </a>
            <br />
            <a className="me-2" href="/">
              <i class="fab fa-linkedin"></i>
              <strong>linkedin</strong>
            </a>
            <br />
          </div>
        </div>
      </div>
        <p className="text-muted text-center mt-5 mb-0">Copyright © 2021 Tahera. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
