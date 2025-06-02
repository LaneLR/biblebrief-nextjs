import styled from "styled-components";
import PrayerWallPost from "./PrayerWallPost";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  color: black;
`;

const PrayerTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 1.2rem;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0 5px;
`;

const PostWrapper = styled.div`
  margin-bottom: 1vh;

  &:last-child {
    margin-bottom: 8vh;
  }
`;

const PrayerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const PrayerSubmitButton = styled.button`
  width: 80%;
  max-height: 4vh;
  padding: 3px;
  border-radius: 6px;
  background-color: #5850ec;
  border: none;
  font-size: 1.1rem;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export default function PrayerWall() {
  const [text, setText] = useState("");
  const [prayers, setPrayers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text || text.trim() === "") return;
    setPrayers([...prayers, text.trim()]);
    setText("");
  }

  return (
    <Wrapper>
      <PrayerForm onSubmit={handleSubmit}>
        <PrayerTextarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your prayer here..."
        />
        <PrayerSubmitButton type="submit">Post Prayer</PrayerSubmitButton>
      </PrayerForm>
      {prayers.map((prayer, index) => (
        <PostWrapper key={index}>
          <PrayerWallPost>{prayer}</PrayerWallPost>
        </PostWrapper>
      ))}
    </Wrapper>
  );
}
