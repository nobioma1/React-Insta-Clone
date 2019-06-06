import React from 'react';
import styled from 'styled-components';
import './global.css';
import dummyData from './dummy-data';
import PostPage from './Components/PostContainer/PostPage';
import Login from './Components/Login/Login';
import withAuthenticate from './Components/authentication/withAuthenticate';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appData: [],
      currentUser: '',
      searchTerm: ''
    };
  }

  componentDidMount() {
    let data = localStorage.getItem('insta-clone-noble');
    let currentUser = localStorage.getItem('insta-clone-noble-user');
    this.setState({ currentUser });

    if (data !== null) {
      this.setState({ appData: JSON.parse(data) });
    } else {
      this.setState({ appData: dummyData });
    }
  }

  componentDidUpdate() {
    let data = JSON.stringify(this.state.appData);
    window.localStorage.setItem('insta-clone-noble', data);
  }

  likePost = postId => {
    const posts = this.state.appData;
    const postIndex = posts.findIndex(post => post.id === postId);
    const likedAlready = posts[postIndex].liked.find(
      user => user === this.state.currentUser
    );

    if (!likedAlready) {
      posts[postIndex].likes = posts[postIndex].likes + 1;
      posts[postIndex].liked = [
        ...posts[postIndex].liked,
        this.state.currentUser
      ];
    } else {
      posts[postIndex].likes = posts[postIndex].likes - 1;
      posts[postIndex].liked = posts[postIndex].liked.filter(
        user => user !== this.state.currentUser
      );
    }

    this.setState({ appData: posts });
  };

  addComment = (postId, newComment) => {
    const posts = this.state.appData;
    const postIndex = this.state.appData.findIndex(post => post.id === postId);
    newComment.username = this.state.currentUser;
    posts[postIndex] = {
      ...posts[postIndex],
      comments: [...posts[postIndex].comments, newComment]
    };
    this.setState({ appData: posts });
  };

  searchInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <AppContainer>
        <ComponentFromWithAuthenticate
          searchInput={this.searchInput}
          searchTerm={this.state.searchTerm}
          appData={this.state.appData}
          addComment={this.addComment}
          likePost={this.likePost}
          currentUser={this.state.currentUser}
        />
      </AppContainer>
    );
  }
}

export default App;
