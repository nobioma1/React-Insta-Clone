import React from 'react';
import Search from '../SearchBar/Search';
import { FiInstagram, FiHeart, FiCompass, FiUser } from 'react-icons/fi';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <div className="icon">
            <FiInstagram />
          </div>
          <h1>Instagram</h1>
        </div>

        <Search />

        <div className="option-buttons">
          <div className="icon">
            <FiCompass />
          </div>
          <div className="icon">
            <FiHeart />
          </div>
          <div className="icon">
            <FiUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
