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
      appData: []
    };
  }

  componentDidMount() {
    this.setState({ appData: dummyData });
  }

  addComment = (postId, newComment) => {
    const posts = this.state.appData;
    const postIndex = this.state.appData.findIndex(post => post.id === postId);
    const newPost = {
      ...posts[postIndex],
      comments: [...posts[postIndex].comments, newComment]
    };
    posts[postIndex] = newPost;
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
          />
          <SideBar />
        </main>
      </div>
    );
  }
}

export default App;
