import React, { use, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardStyle = styled.div`
  width: 85vw;
  min-height: 25vh;
  margin: 10px 0;
  border-radius: 20px;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  font-size: 1.25rem;
  font-weight: 450;
  font-family: inherit;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column nowrap;
  width: 100%;
`;

const UserLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 3% 7% 0;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Likes = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 23px;
  width: 25px;
  margin: 5px 8px 5px 5px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const PrayerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: auto;
  padding: 3% 7%;
`;

const LikesNumbers = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  filter: invert(50%);
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const AmenButton = styled.button`
  border: none;
  width: 100%;
  min-height: 50px;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #5850ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.4rem;
  color: rgb(240, 240, 240);
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:active {
    background-color: rgb(121, 100, 238);
    color: white;
  }
`;

export default function PrayerWallPost({ children }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <CardStyle>
        <FlexWrapper>
          <UserLikes>
            <User>Username</User>
            <LikesNumbers>
              <Likes
                alt="Heart icon for liking posts"
                src="/bible-brief-app/heart-icon.png"
              />
              <div>{likes}</div>
            </LikesNumbers>
          </UserLikes>

          <PrayerContent>{children}</PrayerContent>
        </FlexWrapper>

        <AmenButton onClick={() => setLikes(likes + 1)}>AMEN!</AmenButton>
      </CardStyle>
    </>
  );
}
