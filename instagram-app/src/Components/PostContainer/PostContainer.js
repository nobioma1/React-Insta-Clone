import React from 'react';
import './postContainer.css';
import Post from './Post';

const PostContainer = props => {
  return (
    <section className="posts-container">
      {props.appData.map(info => (
        <div key={info.id}>
          <Post userInfo={info} />
        </div>
      ))}
    </section>
  );
};

export default PostContainer;
