import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment';

const CommentsSection = styled.div`
  padding-bottom: 5px;

  div {
    width: 100%;
    font-size: 2.5rem;

    span {
      font-weight: bold;
      font-size: 1.5rem;
      padding-right: 5px;
    }
  }
`;

const Comments = props => {
  return (
    <CommentsSection>
      {props.postComments.map(comment => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </CommentsSection>
  );
};

Comments.propTypes = {
  postComments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

Comments.defaultProps = {
  postComments: []
};

export default Comments;
