import React from 'react';
import './App.css';
import Header from './Components/HeaderContainer/Header';
import PostContainer from './Components/PostContainer/PostContainer';
import SideBar from './Components/SideBar/SideBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <PostContainer />
          <SideBar />
        </main>
      </div>
    );
  }
}

export default App;
