import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './comments.css';

const Comments = props => {
  return (
    <div className="comment-section">
      {props.postComments.map((comment, index) => (
        <div key={`${comment.id}-${index}`}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};

Comments.propTypes = {
  postComments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })).isRequired
}

export default Comments;
