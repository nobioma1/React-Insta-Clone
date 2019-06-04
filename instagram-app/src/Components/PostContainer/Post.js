import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import AddComment from '../CommentSection/AddComment';
import Comments from '../CommentSection/Comments';
import { FiHeart, FiShare } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Post = props => {
  const {
    id,
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments,
  } = props.userInfo;

  const postTime = Moment(Date.parse(timestamp)).fromNow();

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-container">
          <img src={thumbnailUrl} alt="avatar" />
        </div>
        <h4>{username}</h4>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="post" />
        <div className="image-buttons" />
        <div className="post-details">
          <div className="post-icons">
            <i>
              <FiHeart />
            </i>
            <i>
              <FaRegComment className="comment-icon"/>
            </i>
            <i>
              <FiShare />
            </i>
          </div>
          <p className="like-count">{`${likes} likes`}</p>
          <p className="details">
            <span>{username}</span>
          </p>
        </div>
      </div>
      <div className="post-footer">
        <Comments postComments={comments} />
        <p className="time">{postTime.toUpperCase()}</p>
      </div>
      <AddComment postId={id} addComment={props.addComment}/>
    </div>
  );
};

Post.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  addComment: PropTypes.func
};

export default Post;
