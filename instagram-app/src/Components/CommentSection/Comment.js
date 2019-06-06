import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  const { username, text } = props.comment
  return (
    <p>
      <span>{username}</span>{text}
    </p>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  }).isRequired
}

export default Comment;
