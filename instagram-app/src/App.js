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
      appData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main-container">
          <PostContainer appData={this.state.appData} />
          <SideBar />
        </main>
      </div>
    );
  }
}

export default App;
