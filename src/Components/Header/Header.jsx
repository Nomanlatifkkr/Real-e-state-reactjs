import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap'
import logo from '../../assets/images2/reliable.png';
const Header = () => {
  return (
    <header className="main-header" style={{ width: '100%' }}>
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" className="logoreliable" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="/services">Services</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" to="/services/addition">Addition</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/basement">Basement</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/renovation">Renovations</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/roofing">Roofing</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/siding">Siding</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                  <li className="nav-item highlighted-menu"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Contact Button */}
              <div className="header-btn d-inline-flex">
                <Link to="/contact" className="btn-default" style={{marginRight:50,marginBottom:20}}>Contact Us</Link>
              </div>
            </div>
            {/* Main Menu End */}
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;