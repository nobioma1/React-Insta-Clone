import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from './Post';

const PostsContainerDiv = styled.section`
  height: 100%;
  width: 70%;
  @media (max-width: 820px) {
    margin-left: 15%;
  }
  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
  }
`;

const Feedback = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 50px;
`;

const PostContainer = props => {
  let filteredAppData = props.appData.filter(post => {
    return post.username.indexOf(props.searchTerm) !== -1;
  });

  return (
    <PostsContainerDiv>
      {filteredAppData.length > 0 ? (
        filteredAppData.map(info => (
          <div key={info.id}>
            <Post
              postInfo={info}
              addComment={props.addComment}
              likePost={props.likePost}
              currentUser={props.currentUser}
            />
          </div>
        ))
      ) : (
        <Feedback>No Post Available!</Feedback>
      )}
    </PostsContainerDiv>
  );
};

PostContainer.propTypes = {
  appData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.Number,
      timestamp: PropTypes.string,
      comment: PropTypes.array
    }).isRequired
  )
};

PostContainer.defaultProps = {
  appData: []
};

export default PostContainer;
