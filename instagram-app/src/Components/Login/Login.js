import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  font-size: 2.3rem;
  @media (max-width: 500px) {
    margin-top: 5%;
    width: 100%;
    margin: 20px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  margin: 8px 0;
  font-size: 2.3rem;
`;

const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-family: Billabong;
  font-weight: 100;
  letter-spacing: 2.5px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 70%;
  font-size: 2.3rem;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: dodgerblue;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 8px;
  margin: 10px 0;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  color: dodgerblue;
  font-size: 1.3rem;
`;

const P = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 10px 0;
  justify-content: space-around;
`;

const ImageDiv = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
`;

const ImageIcon = styled.img`
  width: 100%;
`;

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  inputChange = (value, state) => {
    if (state === 'username') this.setState({ username: value });
    if (state === 'password') this.setState({ password: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('insta-clone-noble-user', this.state.username.trim());
    this.setState({ state: this.state });
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <CardContainer>
          <HeaderTitle>Instagram</HeaderTitle>
          <Form onSubmit={this.submitHandler}>
            <Input
              type="text"
              value={this.state.username}
              onChange={e => this.inputChange(e.target.value, 'username')}
              placeholder="Username"
            />
            <Input
              type="password"
              value={this.state.password}
              onChange={e => this.inputChange(e.target.value, 'password')}
              placeholder="Password"
              required
            />
            <Button>Log In</Button>
          </Form>
        </CardContainer>

        <CardContainer>
          <p>Don't Have an account?</p>
          <Span>Just Enter a Username and a Password</Span>
        </CardContainer>

        <P>Get the app.</P>

        <FooterContainer>
          <ImageDiv>
            <ImageIcon src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
          </ImageDiv>
          <ImageDiv>
            <ImageIcon src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
          </ImageDiv>
        </FooterContainer>
      </Container>
    );
  }
}

export default Login;
