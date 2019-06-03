import React from 'react';
import AddComment from '../CommentSection/AddComment';
import Comments from '../CommentSection/Comments';
import { FiHeart, FiShare } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-container">
          <img src="" alt="" />
        </div>
        <h4>nobleobioma_</h4>
      </div>
      <div className="image-container">
        <img src="image.jpg" alt="" />
        <div className="image-buttons" />
        <div className="post-details">
          <div className="post-icons">
            <i>
              <FiHeart />
            </i>
            <i>
              <FaRegComment />
            </i>
            <i>
              <FiShare />
            </i>
          </div>
          <p className="like-count">100 likes</p>
          <p className="details">
            <span>nobleobioma</span>Thank you for being my best friend. Thank
            you for your understanding. Thank you for stomaching my nonsense.
            Thank you...
          </p>
        </div>
      </div>
      <div className="post-footer">
        <Comments />
        <p className="time">2 HOURS AGO</p>
      </div>
      <AddComment />
    </div>
  );
};

export default Post;
