import React from 'react';
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

export default Comments;
