import React from 'react';
import './addComment.css'

const AddComment = () => {
  return (
    <div className="add-comment">
      <input type="text" placeholder="Add a Comment..." />
      <button>Post</button>
    </div>
  );
};

export default AddComment;
