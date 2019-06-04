import React from 'react';
import './App.css';
import Header from './Components/HeaderContainer/Header';
import PostContainer from './Components/PostContainer/PostContainer';
import SideBar from './Components/SideBar/SideBar';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appData: [],
      currentUser: 'newUser_'
    };
  }

  componentDidMount() {
    this.setState({ appData: dummyData });
  }

  likePost = postId => {
    const posts = this.state.appData;
    const postIndex = posts.findIndex(post => post.id === postId);

    posts[postIndex].likes = posts[postIndex].likes + 1;
    posts[postIndex].liked = [
      ...posts[postIndex].liked,
      this.state.currentUser
    ];

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

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <PostContainer
            appData={this.state.appData}
            addComment={this.addComment}
            likePost={this.likePost}
            currentUser={this.state.currentUser}
          />
          <SideBar />
        </main>
      </div>
    );
  }
}

export default App;
