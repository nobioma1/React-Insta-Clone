import React from 'react';
import './sidebar.css';

const SideBar = props => {
  return (
    <section className="side-bar">
      <div className="user">
        <div className="avatar">
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png"
            alt=""
          />
        </div>
        <h2>{props.currentUser}</h2>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="title">Stories</p>
          <p className="action">Watch all</p>
        </div>
        <p>No Story</p>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="title">Suggestions for you</p>
          <p className="action">See all</p>
        </div>
        <p>No Suggestions</p>
      </div>
      <footer>&copy; 2019 InstaClone | Noble</footer>
    </section>
  );
};

export default SideBar;
