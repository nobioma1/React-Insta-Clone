import React from 'react';
import styled from 'styled-components';
import Header from '../HeaderContainer/Header';
import PostContainer from '../PostContainer/PostContainer';
import SideBar from '../SideBar/SideBar';

const MainContainer = styled.div`
  position: absolute;
  margin-top: 77px;
  width: 930px;
  display: flex;
  justify-content: space-between;
  z-index: 0;
  margin-bottom: 30px;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const PostPage = props => {
  return (
    <React.Fragment>
      <Header searchInput={props.searchInput} searchTerm={props.searchTerm} />
      <MainContainer>
        <PostContainer
          appData={props.appData}
          addComment={props.addComment}
          likePost={props.likePost}
          currentUser={props.currentUser}
          searchTerm={props.searchTerm}
        />
        <SideBar currentUser={props.currentUser} />
      </MainContainer>
    </React.Fragment>
  );
};

export default PostPage;
