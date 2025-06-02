import Card from "./Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  width: auto;
  height: auto;
  color: black;
`;

export default function Profile() {
  return (
    <Wrapper>
      <Card color="green"></Card>
      <Card color="red"></Card>
    </Wrapper>
  );
}
