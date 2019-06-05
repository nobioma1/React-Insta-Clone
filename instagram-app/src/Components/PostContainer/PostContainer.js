import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './postContainer.css';

const PostContainer = props => {
  let filteredAppData = props.appData.filter(post => {
    return post.username.indexOf(props.searchTerm) !== -1;
  });

  return (
    <section className="posts-container">
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
        <p className="defaultMsg">No Post Yet!</p>
      )}
    </section>
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
