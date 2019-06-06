import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import AddComment from '../CommentSection/AddComment';
import Comments from '../CommentSection/Comments';
import { FiHeart, FiShare } from 'react-icons/fi';
import { FaHeart, FaRegComment } from 'react-icons/fa';

const Post = props => {
  const {
    id,
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    liked,
    timestamp,
    comments
  } = props.postInfo;

  const postTime = Moment(Date.parse(timestamp)).fromNow();

  const likedHeart = () => {
    if (liked.includes(props.currentUser)) {
      return <FaHeart style={{color: "red"}} onClick={() => props.likePost(id)}/>;
    }
    return <FiHeart onClick={() => props.likePost(id)}/>
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-container">
          <img src={thumbnailUrl} alt="avatar" />
        </div>
        <h4>{username}</h4>
      </div>
      <div className="image-container">
        <img onDoubleClick={() => props.likePost(id)} src={imageUrl} alt="post" />
        <div className="post-details">
          <div className="post-icons">
            <i>
              {likedHeart()}
            </i>
            <i>
              <FaRegComment className="comment-icon" />
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
      <AddComment postId={id} addComment={props.addComment} />
    </div>
  );
};

Post.propTypes = {
  postInfo: PropTypes.shape({
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
