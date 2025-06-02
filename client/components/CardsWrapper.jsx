import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: auto;
  height: auto;
  color: black;
`;

export default function CardsWrapper() {
  return (
    <Wrapper>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Wrapper>
  );
}
