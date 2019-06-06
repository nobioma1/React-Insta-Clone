import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddComment from '../CommentSection/AddComment';
import Comments from '../CommentSection/Comments';
import { Avatar } from '../reusable';
import { FiHeart, FiShare } from 'react-icons/fi';
import { FaHeart, FaRegComment } from 'react-icons/fa';

const PostDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #999;
  background-color: white;
  @media (max-width: 820px) {
    width: 100%;
    margin-top: 3px;
    border: none;
  }

  p {
    padding: 1.5px 0px;
  }

  footer {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;

    time {
      font-size: 1.3rem;
      color: gray;
    }
  }
`;

const PostHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 65%;

  img {
    width: 100%;
    min-height: 100%;
    background-color: #999;
  }
`;

const PostInfo = styled.div`
  font-size: 2.5rem;
  padding: 10px;
`;

const PostIcons = styled.div`
  i {
    font-size: 3.8rem;
    margin-right: 15px;
  }
`;

const PostDetails = styled.div`
  span {
    font-size: 1.5rem;
    font-weight: bold;
    padding-right: 5px;
  }
`;

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
      return (
        <FaHeart style={{ color: 'red' }} onClick={() => props.likePost(id)} />
      );
    }
    return <FiHeart onClick={() => props.likePost(id)} />;
  };

  return (
    <PostDiv>
      <PostHeader>
        <Avatar>
          <img src={thumbnailUrl} alt="avatar" />
        </Avatar>
        <h4>{username}</h4>
      </PostHeader>
      <ImageContainer>
        <img
          onDoubleClick={() => props.likePost(id)}
          src={imageUrl}
          alt="post"
        />
        <PostInfo>
          <PostIcons>
            <i>{likedHeart()}</i>
            <i>
              <FaRegComment />
            </i>
            <i>
              <FiShare />
            </i>
          </PostIcons>
          <p>{`${likes} likes`}</p>
          <PostDetails>
            <span>{username}</span>
          </PostDetails>
        </PostInfo>
      </ImageContainer>
      <footer>
        <Comments postComments={comments} />
        <time>{postTime.toUpperCase()}</time>
      </footer>
      <AddComment postId={id} addComment={props.addComment} />
    </PostDiv>
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
