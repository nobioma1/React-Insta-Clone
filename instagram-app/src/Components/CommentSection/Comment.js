import React from 'react';

const Comment = props => {
  const { username, text } = props.comment
  return (
    <p className="comment">
      <span>{username}</span>{text}
    </p>
  );
};

export default Comment;
