import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import './addComment.css';

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
      <div className="add-comment">
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
      </div>
    );
  }
}

AddComment.propTypes = {
  postId: PropTypes.string,
  addComment: PropTypes.func
};

export default AddComment;
