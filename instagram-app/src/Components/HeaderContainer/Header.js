import React from 'react';
import Search from '../SearchBar/Search';
import { FiInstagram, FiHeart, FiCompass, FiUser } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import './header.css';

const logOut = () => {
  localStorage.removeItem('insta-clone-noble-user');
  window.location.reload();
}

const Header = props => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <div className="icon">
            <FiInstagram />
          </div>
          <h1>Instagram</h1>
        </div>

        <Search searchInput={props.searchInput} searchTerm={props.searchTerm} />

        <div className="option-buttons">
          <div className="icon">
            <FiCompass />
          </div>
          <div className="icon">
            <FiHeart />
          </div>
          <div className="icon">
            <FiUser onClick={() => logOut()} />
          </div>
          <div className="icon">
            <IoIosLogOut onClick={() => logOut()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
