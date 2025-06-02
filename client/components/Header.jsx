import styled from "styled-components";

const HeaderWrap = styled.header`
  height: 8vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #08250f;
  border-bottom: solid 1px #08250f;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const LeftNav = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  font-size: 1.8em;
  font-weight: bolder;
  font-family: sans-serif;
  padding: 0 0 0 3vw;
  color: inherit;
`;

// const CenterNav = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 0vw;
//   max-width: 33%;
//   max-height: 100%;
// `;

// const UpperBackground = styled.div`
//  background-color: #08250f;
//  width:100%;
//  height: 100px;
//  margin-top: -50px;
// `

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: auto;
  max-height: 100%;
  margin-right: 3vw;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #08250f;
  padding: 2vw;
  border-radius: 13%;
`

const Logo = styled.img`
  aspect-ratio: 550 / 300;
  width: 15vw;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
`;

export default function Header() {
  return (
    <>
    {/* <UpperBackground /> */}
    <HeaderWrap>
      <LeftNav><p>Welcome back! 👋</p>
      </LeftNav>
      <RightNav>     
      <LogoWrapper>
              <Logo 
          alt="The Bible Brief Logo"
          src="/bible-brief-app/bbicon.png"
       />
        </LogoWrapper> 
      </RightNav>
    </HeaderWrap>
    </>
  );
}
