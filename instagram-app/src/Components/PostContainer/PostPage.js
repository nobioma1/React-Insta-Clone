import React from 'react';
import Header from '../HeaderContainer/Header';
import PostContainer from '../PostContainer/PostContainer';
import SideBar from '../SideBar/SideBar';

const PostPage = props => {
  return (
    <React.Fragment>
      <Header searchInput={props.searchInput} searchTerm={props.searchTerm} />
      <main className="main-container">
        <PostContainer
          appData={props.appData}
          addComment={props.addComment}
          likePost={props.likePost}
          currentUser={props.currentUser}
          searchTerm={props.searchTerm}
        />
        <SideBar currentUser={props.currentUser} />
      </main>
    </React.Fragment>
  );
};

export default PostPage;
