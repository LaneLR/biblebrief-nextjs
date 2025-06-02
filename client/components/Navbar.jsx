import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.footer`
  position: fixed;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 7vh;
  background-color: #08250f;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  padding: 0 5px 3px 5px;

  a,
  button,
  img {
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  &:nth-of-type(1) img{
    height: 40px;
    width: 40px;
    padding: 3px;
  }
      &:nth-of-type(2) img{
    height: 40px;
    width: 40px;
    padding: 2px;
  }
      &:nth-of-type(3) img{
    height: 55px;
    width: 55px;
  }
      &:nth-of-type(4) img{
    height: 45px;
    width: 45px;
  }
      &:nth-of-type(5) img{
    height: 45px;
    width: 45px;
  }
`

const Icon = styled.img`
  max-height: 100px;
  max-width: 100px;
  filter: invert(100%);
  margin-top: 7px;
`;

export default function Navbar() {
  return (
    <Wrap>
      <StyledLink to="/bible-brief-app">
        <Icon alt="Home Icon" src="/bible-brief-app/home-icon.png" />
      </StyledLink>
      <StyledLink to="/search">
        <Icon alt="Search Icon" src="/bible-brief-app/search-icon.png" />
      </StyledLink>
      <StyledLink to="/newsletter">
        <Icon
          alt="Newsletter Icon"
          src="/bible-brief-app/newsletter-icon.png"
        />
      </StyledLink>
      <StyledLink to="/prayerwall">
        <Icon alt="Group Icon" src="/bible-brief-app/community-icon.png" />
      </StyledLink>
      <StyledLink to="/profile">
        <Icon alt="User Icon" src="/bible-brief-app/usernav-icon.png" />
      </StyledLink>
    </Wrap>
  );
}
