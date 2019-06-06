import React from 'react';

const withAuthenticate = PostPage => Login => {
  return class extends React.Component {
    state = {
      isLoggedIn: false
    }

    componentDidMount() {
      const isLoggedIn = !!localStorage.getItem('insta-clone-noble-user');
      this.setState({ isLoggedIn });
    }

    render() {
      if (this.state.isLoggedIn) {
        return <PostPage {...this.props} />;
      }
      return <Login />
    }
  };
}

export default withAuthenticate;
