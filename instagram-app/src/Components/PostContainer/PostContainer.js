import React from 'react';
import PropTypes from 'prop-types';
import './postContainer.css';
import Post from './Post';

const PostContainer = props => {
  return (
    <section className="posts-container">
      {props.appData.length > 0 ? (
        props.appData.map(info => (
          <div key={info.id}>
            <Post userInfo={info} addComment={props.addComment} />
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
