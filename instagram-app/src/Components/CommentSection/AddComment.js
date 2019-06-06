import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';

const AddCommentContainer = styled.div`
  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;

    input {
      width: 90%;
      border: none;
      font-size: 14px;
      padding: 20px 10px;
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
    @media (max-width: 500px) {
      width: 80%;
    }

    button {
      width: 10%;
      border: none;
      font-size: 14px;
      font-weight: bold;
      background-color: transparent;
      color: dodgerblue;
      &:focus {
        outline: none;
      }
      @media (max-width: 500px) {
        width: 20%;
      }
    }
  }
`;

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ''
    };
  }

  inputChange = e => {
    this.setState({ newComment: e.target.value });
  };

  updateHandler = e => {
    e.preventDefault();
    if (this.state.newComment.length > 0) {
      const newComment = {
        id: uuid(),
        text: this.state.newComment
      };
      this.props.addComment(this.props.postId, newComment);
      this.setState({ newComment: '' });
    }
  };

  render() {
    return (
      <AddCommentContainer>
        <form onSubmit={e => this.updateHandler(e)}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.newComment}
            placeholder="Add a Comment..."
          />
          <button
            style={{ opacity: this.state.newComment.length > 0 ? 1 : 0.5 }}
            type="submit"
          >
            Post
          </button>
        </form>
      </AddCommentContainer>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.string,
  addComment: PropTypes.func
};

export default AddComment;
