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
      currentUser: 'newUser_',
      searchTerm: ''
    };
  }

  componentDidMount() {
    let data = window.localStorage.getItem('insta-clone-noble');
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
      <div className="App">
        <Header
          searchInput={this.searchInput}
          searchTerm={this.state.searchTerm}
        />
        <main className="main-container">
          <PostContainer
            appData={this.state.appData}
            addComment={this.addComment}
            likePost={this.likePost}
            currentUser={this.state.currentUser}
            searchTerm={this.state.searchTerm}
          />
          <SideBar />
        </main>
      </div>
    );
  }
}

export default App;
