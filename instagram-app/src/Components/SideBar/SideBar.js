import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../reusable';

const SideBarContainer = styled.div`
  margin-top: 50px;
  width: 25%;
  @media (max-width: 820px) {
    display: none;
  }

  h2 {
    font-size: 1.5rem;
  }

  footer {
    font-size: 1.3rem;
    color: #999;
    padding: 20px 0;
  }
`;

const CurrentUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const SideBarCard = styled.div`
  font-size: 2.8rem;
  margin-top: 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  text-align: center;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h3 {
    color: grey;
  }
`;

const SideBar = props => {
  return (
    <SideBarContainer>
      <CurrentUser>
        <Avatar>
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png"
            alt="user avatar"
          />
        </Avatar>
        <h2>{props.currentUser}</h2>
      </CurrentUser>
      <SideBarCard>
        <CardHeader>
          <h3>Stories</h3>
          <h3>Watch all</h3>
        </CardHeader>
        <p>No Story</p>
      </SideBarCard>
      <SideBarCard>
        <CardHeader>
          <h3>Suggestions for you</h3>
          <h3>See all</h3>
        </CardHeader>
        <p>No Suggestions</p>
      </SideBarCard>
      <footer>&copy; 2019 InstaClone | Noble</footer>
    </SideBarContainer>
  );
};

export default SideBar;
