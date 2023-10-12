import React, { useState } from 'react';
import { IoSearchOutline, IoCloseCircleOutline, IoLogInOutline } from 'react-icons/io5';
import logo from '../img/logo.png';
import '../css/main.css'
import '../css/media_query.css'
import '../css/reset.css'
import '../css/variable.css'

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className={isNavActive ? 'active' : ''}>
      <div className="navbar">
        <button className={`navbar-menu-btn ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <nav className={isNavActive ? 'active' : ''}>
          <ul className="navbar-nav">
            <li>
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#category" className="navbar-link">
                Category
              </a>
            </li>
            <li>
              <a href="#live" className={`navbar-link ${isNavActive ? 'indicator' : ''}`}>
                LIVE
              </a>
            </li>
          </ul>
        </nav>
        <div className="navbar-actions">
          <form className={`navbar-form ${isSearchActive ? 'active' : ''}`}>
            <input
              type="text"
              name="search"
              placeholder="I'm looking for..."
              className="navbar-form-search"
            />
            <button className="navbar-form-btn">
              <IoSearchOutline />
            </button>
            <button className="navbar-form-close" onClick={toggleSearch}>
              <IoCloseCircleOutline />
            </button>
          </form>
          <button className="navbar-search-btn" onClick={toggleSearch}>
            <IoSearchOutline />
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
