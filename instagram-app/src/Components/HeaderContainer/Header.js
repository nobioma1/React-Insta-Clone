import React from 'react';
import styled from 'styled-components';
import Search from '../SearchBar/Search';
import { FiInstagram, FiHeart, FiCompass, FiUser } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';

const logOut = () => {
  localStorage.removeItem('insta-clone-noble-user');
  window.location.reload();
};

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 77px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid lightgray;
  background-color: white;
  z-index: 1;
`;

const HeaderContent = styled.div`
  width: 930px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoHeader = styled.div`
  display: flex;
  align-items: center;

  h1 {
    border-left: 1px solid gray;
    padding-left: 20px;
    font-family: 'Billabong';
    font-size: 3rem;
    margin: 0;
    letter-spacing: 1.2px;
    font-weight: lighter;
  }
`;

const LogoIcon = styled.div`
  padding-right: 20px;
  font-size: 50px;
`;

const HeaderIcon = styled(LogoIcon)`
  &:nth-child(4) {
    display: none;
  }
  @media (max-width: 500px) {
    &:nth-child(1) {
      display: none;
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(4) {
      display: flex;
      padding-left: 80%;
    }
  }
`;

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  width: 150px;
  justify-content: space-between;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoHeader>
          <LogoIcon>
            <FiInstagram />
          </LogoIcon>
          <h1>Instagram</h1>
        </LogoHeader>

        <Search searchInput={props.searchInput} searchTerm={props.searchTerm} />

        <HeaderIconContainer>
          <HeaderIcon>
            <FiCompass />
          </HeaderIcon>
          <HeaderIcon>
            <FiHeart />
          </HeaderIcon>
          <HeaderIcon>
            <FiUser onClick={() => logOut()} />
          </HeaderIcon>
          <HeaderIcon>
            <IoIosLogOut onClick={() => logOut()} />
          </HeaderIcon>
        </HeaderIconContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
